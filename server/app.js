const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const cron = require('node-cron');
const { fetchUsersByDate } = require('./src/services/userServices');
const { SendDoseReminderMsg } = require('./src/utils/SendDoseReminderMsg');

const app = express();
const port = process.env.PORT;
const app_version = process.env.APP_VERSION;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use(cors({
  // origin: ['http://localhost:3400'],
  origin: ['https://far-frontend-8a62ab4bfdf3.herokuapp.com'],
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  credentials: true
}));

const privateKey = process.env.TOKEN_SECRET_KEY;
const salt = 10;

// routes ------------------------
const userRoutes = require('./src/routes/userRoutes');
const doctorsRoutes = require('./src/routes/doctorsRoutes');
app.use('/user', userRoutes);
app.use('/doctors', doctorsRoutes);

// cron Scheduler
cron.schedule('00 20 * * *', async () => {
  const getFormattedDate = async () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = date.getDate();
    day = day < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }

  const currentDate = await getFormattedDate();

  const sendDoseMsgs = async (doseType, dateField) => {
    const query = `SELECT * FROM users WHERE '${currentDate}' IN (${dateField})`;
    fetchUsersByDate(query, async (err, res) => {
      try {
        if (err) {
          console.log(err);
          return;
        }
        if (res.length > 0) {
          for (let i = 0; i < res.length; i++) {
            const doseDate = res[i][dateField];
            await SendDoseReminderMsg(res[i].mobile_number, res[i].user_name, doseType, doseDate);
            console.log(res[i]);
          }
        } else {
          console.log(`No users found for ${doseType.toLowerCase()}.`);
        }
      } catch (err) {
        console.log(err);
      }
    });
  }

  sendDoseMsgs("Second Dose", "second_drd");
  sendDoseMsgs("Third Dose", "third_drd");
  sendDoseMsgs("Fourth Dose", "fourth_drd");
  sendDoseMsgs("Fifth Dose", "fifth_drd");
});
// --------------

app.get("/", (req, res) => {
  res.status(200).json({ Status: `Server for Fearless Against Rabies started - ${app_version}` });
});

app.listen(port || 8081, () => {
  console.log("server app running on port: " + port);
});
