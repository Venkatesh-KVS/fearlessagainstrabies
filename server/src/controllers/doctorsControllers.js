const doctorsServices = require('../services/doctorsServices');
const jwt = require('jsonwebtoken');
const { MailDoctorsContactMsg } = require('../utils/MailDoctorsContactMsg');
const privateKey = process.env.TOKEN_SECRET_KEY;

const registerOTP = async (req, res) => {
    const { doctorData } = req.body;
    doctorsServices.registerOTP(doctorData, (error, response) => {
        if (error) console.log("DB Error", error);

        res.status(200).json(response);
    })
}

const verifyRegisterOTP = async (req, res) => {
    const { doctorData } = req.body;
    doctorsServices.verifyRegisterOTP(doctorData, (error, response) => {
        if (error) console.log("DB Error", error);
        
        res.status(200).json(response);
    })
}

const loginOTP = async (req, res) => {
    const { mobileNumber } = req.body;
    doctorsServices.loginOTP(mobileNumber, (error, response) => {
        if (error) console.log("DB Error", error);

        res.status(200).json(response);
    })
}

const verifyLoginOTP = async (req, res) => {
    const { mobileNumber, otp } = req.body;
    
    doctorsServices.getDoctor(mobileNumber, async (error, userdata) => {
        if (error) console.log("DB Error fetching user:", error);
        
        if (userdata.length === 0) return res.status(401).json({ error: "User not found" });
        
        if (userdata[0].otp === otp) {
            const doctorId = userdata[0].id;

            const tokenPayload = { sub: doctorId };
            const doctorToken = jwt.sign(tokenPayload, privateKey, { expiresIn: "1d" });
            return res.status(200).json({ Status: "Verified", doctorId: doctorId, doctorToken: doctorToken });
        } else {
            return res.status(200).json({ Status: "wrongOTP" });
        }
    });
};

const getDoctorInfo = async (req, res) => {
    const { doctorId } = req.params;
    doctorsServices.getDoctorInfo(doctorId, (error, result) => {
        if (error) console.log("DB Error fetching user:", error);
        if (result) {
            return res.status(200).json(result);
        }
    })    
}

const sendContactFormDataToEmail = async (req, res) => {
    const { formData } = req.body;
    try {
        const response = await MailDoctorsContactMsg(formData);
        res.status(200).send({ message: response });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Something went wrong' });
    }
};

module.exports = {
    registerOTP,
    verifyRegisterOTP,
    loginOTP,
    verifyLoginOTP,
    getDoctorInfo,
    sendContactFormDataToEmail
};