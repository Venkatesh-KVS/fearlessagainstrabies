const userServices = require('../services/userServices');
const jwt = require('jsonwebtoken');
const { GenerateDosageDates } = require('../utils/generateDosageDates');
const { SendScheduledDates } = require('../utils/SendScheduledDates');
const privateKey = process.env.TOKEN_SECRET_KEY;

const loginOTP = async (req, res) => {
    const { mobileNumber } = req.body;
    userServices.loginOTP(mobileNumber, (error, response) => {
        if (error) console.log("DB Error", error);

        res.status(200).json(response);
    })
}

const getUserInfo = async (req, res) => {
    try {
      res.json({ Status: "ok", userId: req.userId });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

const verifyOTP = async (req, res) => {
    const { mobileNumber, otp, firstDoseDate, userName } = req.body;
  
    userServices.getUser(mobileNumber, async (error, userdata) => {
      if (error) {
        console.log("DB Error fetching user:", error);
        return res.status(500).json({ error: "Database error" });
      }
  
      if (userdata.length === 0) {
        return res.status(401).json({ error: "User not found" });
      }
  
      if (userdata[0].otp !== otp) {
        return res.status(200).json({ Status: "wrongOTP" });
      }
  
      const FIRSTDoseDate = new Date(firstDoseDate);
      const dosageDates = await GenerateDosageDates(FIRSTDoseDate);
  
      userServices.addScheduleDates(mobileNumber, dosageDates, userName, async (newSchErr, newSchRes) => {
        if (newSchErr) {
          console.log("DB Error adding schedule dates:", newSchErr);
          return res.status(500).json({ error: "Database error" });
        }
  
        try {
          await SendScheduledDates(mobileNumber, userName, dosageDates);
          res.json({
            Status: "Verified",
            dosageDates: {
              firstDoseDate: dosageDates.firstDoseDate,
              secondDoseDate: dosageDates.secondDoseDate,
              thirdDoseDate: dosageDates.thirdDoseDate,
              fourthDoseDate: dosageDates.fourthDoseDate,
              fifthDoseDate: dosageDates.fifthDoseDate,
            }
          });
        } catch (smsError) {
          console.error("Error sending message:", smsError);
          res.status(500).json({ error: "Error sending SMS" });
        }
      });
    });
  };

module.exports = {
    loginOTP,
    getUserInfo,
    verifyOTP
};