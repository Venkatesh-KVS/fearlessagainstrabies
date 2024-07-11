const twilio = require("twilio");
require('dotenv').config();

const client = twilio(process.env.TWL_AC_SID, process.env.TWL_AUTH_TOKEN);

const SendOTP_docLogin = async (num, otp, name) => {
  return new Promise((resolve, reject) => {
    client.messages
      .create({
        body: `Hello ${name}, Your OTP for Login to FAR - Rabies and Doctors is: ${otp}`,
        to: "+91" + num,
        from: process.env.TWL_FROM_NUM
      })
      .then((message) => {
        console.log(`Doctor Login otp sent ${num}`);
        resolve({ Status: "Success", Message: "OTP sent!" });
      })
      .catch((err) => {
        console.error("Error sending OTP:", err);
        reject(err);
      });
  });
};


module.exports = {
  SendOTP_docLogin
};
