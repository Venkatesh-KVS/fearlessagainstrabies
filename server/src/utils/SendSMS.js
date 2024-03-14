const twilio = require("twilio");
const accountSid = "AC11fbb29ee1e5ab7f7b30b88dc27aa63d";
const authToken = "b5f2ec0c6d4ed2c0e8ae9fa8c5e18c4a";
const client = twilio(accountSid, authToken);

const sendSMS = (num, res) => {
  client.messages
    .create({
      body: "Hello from twilio-node, Your OTP is: 000000 ",
      to: "+91" + num,
      from: "+12178784015",
    })
    .then((message) => {
      console.log("OTP sent!");
      res.json({ Status: "OTP sent!" });
    })
    .catch((err) => {
      console.error("Error sending OTP:", err);
      res.status(500).json({
        "Failed to send OTP": err,
        messagese: "Failed to send OTP!",
      });
    });
};

module.exports = {
  sendSMS,
};
