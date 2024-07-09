require('dotenv').config();
const createpoolConnection = require("../../config/database");
const pool = createpoolConnection();
const axios = require("axios");
const { sendOTP } = require('../utils/SendOTP');
const salt = parseInt(process.env.SALT);

const getUser = (mobileNumber, callback) => {
    pool.query(
        "SELECT * FROM users WHERE mobile_number = ?",
        [mobileNumber],
        (error, response) => {
            callback(error, response);
        }
    );
};

const getUserProfile = (userId, callback) => {
    const query = "SELECT * FROM user_profile WHERE user_id = ?";
    pool.query(query, [userId], (error, response) => {
        callback(error, response);
    });
};

const loginOTP = (number, callback) => {
    // Check if mobile number exists
    pool.query("SELECT * FROM users WHERE mobile_number = ?", [number], async (error, response) => {
        if (error) { callback(error, null); return; }

        if (response.length > 0) {
            // Generates OTP
            let digits = "0123456789";
            let OTP = "";
            let noOfDigits = 6; //number of digits of an otp generated
            for (let i = 0; i < noOfDigits; i++) { OTP += digits[Math.floor(Math.random() * 10)]; }

            const query = "UPDATE users SET otp = ? WHERE mobile_number = ?";
            pool.query(query, [OTP, number], async (dberr, result) => {
                if (dberr) {
                    console.error("Database error:", dberr);
                    callback(dberr, null);
                } else {
                    try {
                        // sends OTP message through SMS gateway
                        const smsResponse = await sendOTP(number, OTP);
                        callback(null, smsResponse);

                        // callback(null, { Status: "Success", otp: OTP });
                    } catch (smsError) {
                        console.error("Error sending OTP via SMS:", smsError);
                        callback(smsError, null);
                    }
                }
            });
        } else {
            // Generates OTP
            let digits = "0123456789";
            let OTP = "";
            let noOfDigits = 6; //number of digits of an otp generated
            for (let i = 0; i < noOfDigits; i++) { OTP += digits[Math.floor(Math.random() * 10)]; }

            const query = "INSERT INTO users (mobile_number, otp) VALUES (?, ?)";
            pool.query(query, [number, OTP], async (dberr, result) => {
                if (dberr) {
                    console.error("Database error:", dberr);
                    callback(dberr, null);
                } else {
                    try {
                        // sends OTP message through SMS gateway
                        const smsResponse = await sendOTP(number, OTP);
                        callback(null, smsResponse);

                        // callback(null, { Status: "Success", otp: OTP });
                    } catch (smsError) {
                        console.error("Error sending OTP via SMS:", smsError);
                        callback(smsError, null);
                    }
                }
            });
        }
    });
};

const addScheduleDates = (mobileNumber, dosageDates, userName, callback) => {
    const { firstDoseDate, secondDoseDate, secondDoseMessagingDate, thirdDoseDate, thirdDoseMessagingDate, fourthDoseDate, fourthDoseMessagingDate, fifthDoseDate, fifthDoseMessagingDate } = dosageDates;
    const currentTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const query = `UPDATE users SET first_dd=?, second_dd=?, second_drd=?, third_dd=?, third_drd=?, fourth_dd=?, fourth_drd=?, fifth_dd=?, fifth_drd=?, date_time=?, user_name=? WHERE mobile_number=?`;
    pool.query(
        query,
        [firstDoseDate, secondDoseDate, secondDoseMessagingDate, thirdDoseDate, thirdDoseMessagingDate, fourthDoseDate, fourthDoseMessagingDate, fifthDoseDate, fifthDoseMessagingDate, currentTime, userName, mobileNumber],
        (err, res) => { callback(err, res); }
    );
};

const fetchUsersByDate = async (query, callback) => {
    pool.query(query, (err, res) => {
        callback(err, res);
    });
  }
  


module.exports = {
    getUser,
    getUserProfile,
    loginOTP,
    addScheduleDates,
    fetchUsersByDate
};
