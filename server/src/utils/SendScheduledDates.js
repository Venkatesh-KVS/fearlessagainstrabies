const twilio = require("twilio");
require('dotenv').config();

const client = twilio(process.env.TWL_AC_SID, process.env.TWL_AUTH_TOKEN);

const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split('-');
  return `${day}-${month}-${year}`;
};

const SendScheduledDates = async (num, name, dosageDates) => {
const bodyMessage = `
Dear ${name},

Thank you for registering at FearlessAgainstRabies. Your scheduled dates for anti-rabies vaccination are:

1st Dose: ${formatDate(dosageDates.firstDoseDate)}
2nd Dose: ${formatDate(dosageDates.secondDoseDate)}
3rd Dose: ${formatDate(dosageDates.thirdDoseDate)}
4th Dose: ${formatDate(dosageDates.fourthDoseDate)}
5th Dose: ${formatDate(dosageDates.fifthDoseDate)}

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
        console.log(`All dates message sent to ${num}`)
        resolve({ Status: "Success" });
      })
      .catch((err) => {
        console.error("Error registered message:", err);
        reject(err);
      });
  });
};

module.exports = {
  SendScheduledDates
};

