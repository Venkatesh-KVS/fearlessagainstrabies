const twilio = require("twilio");
require('dotenv').config();

const client = twilio(process.env.TWL_AC_SID, process.env.TWL_AUTH_TOKEN);

const SendDoseReminderMsg = async (num, name, doseNumber, doseDate) => {
  const bodyMessage = `
Dear ${name},

Your ${doseNumber} of anti-rabies vaccine is scheduled tomorrow ${doseDate}. Please visit your doctor and get yourself vaccinated. 

Please note: #Rabies is FATAL but 100% PREVENTABLE. Get vaccinated and stay protected.

Best regards,
FearlessAgainstRabies
An initiative by - Human Biologicals Institute
(For more information visit – www.fearlessagainstrabies.com)`;

  return new Promise((resolve, reject) => {
    client.messages
      .create({
        body: bodyMessage,
        to: "+91" + num,
        from: process.env.TWL_FROM_NUM
      })
      .then((message) => {
        console.log(`${doseNumber} reminder message sent to ${num}`)
        resolve({ Status: "Success" });
      })
      .catch((err) => {
        console.error("Error sending dose reminder message:", err);
        reject(err);
      });
  });
};

module.exports = {
  SendDoseReminderMsg
};
