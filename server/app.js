const express = require("express");
require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const axios = require("axios");
const app = express();
const createFARdbConnection = require("./config/database");
const { sendSMS } = require("./src/utils/SendSMS");

app.use(
  cors({
    origin: ["http://localhost:3400"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const privateKey = process.env.PRIVATEKEY;
const salt = 10;

app.get("/sendSMS/:number", (req, res) => {
  const num = req.params.number;
  sendSMS(num, res);
});

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ Status: "Server for Fearless Against Rabies started" });
});

const port = process.env.PORT;
app.listen(port || 8081, () => {
  console.log("server app running on port: " + port);
});
