require('dotenv').config();
const createpoolConnection = require("../../config/database");
const pool = createpoolConnection();
const { SendOTP_docReg } = require('../utils/SendOTP_docReg');
const { SendDocRegSuccessfullMsg } = require('../utils/SendDocRegSuccessfullMsg');
const { SendDocRegSuccessfullMail } = require('../utils/SendDocRegSuccessfullMail');
const { SendOTP_docLogin } = require('../utils/SendOTP_docLogin');

const getDoctor = (mobileNumber, callback) => {
    pool.query(
        "SELECT * FROM doctors WHERE mobile_number = ?",
        [mobileNumber],
        (error, response) => {
            callback(error, response);
        }
    );
};

const getDoctorProfile = (userId, callback) => {
    const query = "SELECT * FROM doctor_profile WHERE id = ?";
    pool.query(query, [userId], (error, response) => {
        callback(error, response);
    });
};

const registerOTP = (doctorData, callback) => {
    const { number, email, name } = doctorData;
    
    // Check if mobile number exists
    pool.query("SELECT * FROM doctors WHERE mobile_number = ?", [number], async (checkNumErr, checkNumRes) => {
        if (checkNumErr) {
            return callback(checkNumErr, null);
        }
        
        if (checkNumRes.length > 0 && checkNumRes[0].regd_id !== null) {
            return callback(null, { Status: 'NumExists' });
        }
        
        // Check if email exists
        pool.query("SELECT * FROM doctors WHERE email = ?", [email], async (checkEmailErr, checkEmailRes) => {
            if (checkEmailErr) {
                return callback(checkEmailErr, null);
            }
            
            if (checkEmailRes.length > 0 && checkEmailRes[0].regd_id !== null) {
                return callback(null, { Status: 'EmailExists' });
            }
            
            // Generate OTP
            const digits = "0123456789";
            let OTP = "";
            const noOfDigits = 6; // number of digits of an otp generated
            for (let i = 0; i < noOfDigits; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
            }

            const query = checkNumRes.length > 0 
                ? "UPDATE doctors SET otp = ?, email = ? WHERE mobile_number = ?"
                : "INSERT INTO doctors (mobile_number, otp, email) VALUES (?, ?, ?)";

            const queryParams = checkNumRes.length > 0 
                ? [OTP, email, number] 
                : [number, OTP, email];

            pool.query(query, queryParams, async (dberr, result) => {
                if (dberr) {
                    console.error("Database error:", dberr);
                    return callback(dberr, null);
                }
                
                try {
                    // Sends OTP message through SMS gateway
                    const smsResponse = await SendOTP_docReg(number, OTP, name);
                    callback(null, smsResponse);
                } catch (smsError) {
                    console.error("Error sending OTP via SMS:", smsError);
                    callback(smsError, null);
                }
            });
        });
    });
};


const verifyRegisterOTP = (doctorData, callback) => {
    const { number, email, name, speciality, otp } = doctorData;
    // Check if mobile number exists
    pool.query("SELECT * FROM doctors WHERE mobile_number = ?", [number], async (err, res) => {
        if (err) { callback(err, null); return; }
        
        if (res.length === 0) { callback({err: "number doesn't exist at doctor reg otp verification: "}, null); return; }
        else {
            if(res[0].otp === otp) {
                const genRegdId = function () {
                    return new Promise((resolve, reject) => {
                        const userId = res[0].id;
                        const mobL4dig = number.substring(7,10);
                        const SPE = speciality.substring(0,3);
                        const redId = `FAR_DOC${userId}${mobL4dig}${SPE.toUpperCase()}`;
                        resolve(redId);
                    });
                }

                try {
                    const registrationId = await genRegdId();
                    const query = `UPDATE doctors SET regd_id=?, doctor_name=?, email=?, speciality=? WHERE mobile_number=?`;
                    pool.query(query, [registrationId, name, email, speciality, number], async (err2, res2) => {
                        if(err2) {
                            console.log(err2);
                            callback(err2, null);
                            return;
                        }
                        try{
                            await SendDocRegSuccessfullMsg(number, name, registrationId);
                            await SendDocRegSuccessfullMail(name, email, speciality, registrationId, number);
                            callback(null, {Status: "Verified", regData: {registrationId, name, email, speciality, number}});
                        }catch(messageError){
                            console.error("Error sending message:", messageError);
                            callback(messageError, null);
                        }
                    });
                } catch (error) {
                    console.error(error);
                    callback(error, null);
                }
            } else {
                callback(null, {Status: "wrongOTP"});
            }
        }
    });
};

const loginOTP = (number, callback) => {
    // Check if mobile number exists
    pool.query("SELECT * FROM doctors WHERE mobile_number = ?", [number], async (error, response) => {
        if (error) { callback(error, null); return; }

        if (response.length > 0 && response[0].regd_id !== null) {
            // Generates OTP
            let digits = "0123456789";
            let OTP = "";
            let noOfDigits = 6; //number of digits of an otp generated
            for (let i = 0; i < noOfDigits; i++) { OTP += digits[Math.floor(Math.random() * 10)]; }

            const query = "UPDATE doctors SET otp = ? WHERE mobile_number = ?";
            pool.query(query, [OTP, number], async (dberr, result) => {
                if (dberr) {
                    console.error("Database error:", dberr);
                    callback(dberr, null);
                } else {
                    try {
                        // sends OTP message through SMS gateway
                        const smsResponse = await SendOTP_docLogin(number, OTP, response[0].doctor_name);
                        callback(null, smsResponse);

                        // callback(null, { Status: "Success", otp: OTP });
                    } catch (smsError) {
                        console.error("Error sending OTP via SMS:", smsError);
                        callback(smsError, null);
                    }
                }
            });
        } else {
            callback(null, { Status: 'NumNotExist' }); return;
        }
    });
};

const getDoctorInfo = (doctorId, callback) => {
    pool.query('SELECT * FROM doctors where id = ?', [doctorId], (err, res) => {
        callback(err, res)
    })
}


module.exports = {
    getDoctor,
    getDoctorProfile,
    registerOTP,
    verifyRegisterOTP,
    loginOTP,
    getDoctorInfo
};
