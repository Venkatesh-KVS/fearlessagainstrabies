const twilio = require("twilio");
require('dotenv').config();

const client = twilio(process.env.TWL_AC_SID, process.env.TWL_AUTH_TOKEN);

const sendOTP = async (num, otp) => {
  return new Promise((resolve, reject) => {
    client.messages
      .create({
        body: `Hello, Your OTP is: ${otp}`,
        to: "+91" + num,
        from: process.env.TWL_FROM_NUM
      })
      .then((message) => {
        resolve({ Status: "Success", Message: "OTP sent!" });
      })
      .catch((err) => {
        console.error("Error sending OTP:", err);
        reject(err);
      });
  });
};


module.exports = {
  sendOTP
};
