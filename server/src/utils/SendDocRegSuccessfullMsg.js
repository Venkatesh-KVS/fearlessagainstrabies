const twilio = require("twilio");
require('dotenv').config();

const client = twilio(process.env.TWL_AC_SID, process.env.TWL_AUTH_TOKEN);

const SendDocRegSuccessfullMsg = async (num, name, regId) => {
  return new Promise((resolve, reject) => {
    client.messages
      .create({
        body: `Hello ${name}, Thank you for registering at Fearless Against Rabies - Doctor's point, your registered id is : ${regId}`,
        to: "+91" + num,
        from: process.env.TWL_FROM_NUM
      })
      .then((message) => {
        console.log("registered Msg sent!");
        resolve({ Status: "Success", Message: "Doctor registered successfully message sent!" });
      })
      .catch((err) => {
        console.error("Error sending OTP:", err);
        reject(err);
      });
  });
};


module.exports = {
  SendDocRegSuccessfullMsg
};
