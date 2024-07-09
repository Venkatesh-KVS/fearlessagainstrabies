const twilio = require("twilio");

// Arpit Acc creds
// const accountSid = "AC62f27642d280fe5268f891e16a8d475a";
// const authToken = "65da2fc1cd4043904cab64af308bfc61";
// const fromNum = "+15085068971"

// Santosh Acc creds
// const accountSid = "ACff06bc6075952f1b13610cdfa7e5707d";
// const authToken = "0cda4721cbd8098b4bab0698d7099cd9";
// const fromNum = "+18168674901"

// Amarnath Acc creds
const accountSid = "AC03b0c8caaead3223213f8b92415a5110";
const authToken = "d889a6b5e6732c5fe1b4c32b994e0db5";
const fromNum = "+15104174662";

const client = twilio(accountSid, authToken);

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
        from: fromNum
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
