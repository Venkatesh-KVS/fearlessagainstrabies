const express = require('express');
const router = express.Router();
const doctorsControllers = require('../controllers/doctorsControllers');
const { verifyDoctorToken } = require('../middlewares/DoctorAuthenticationMiddleware');

// Doctor Authentication
router.post('/register/send-otp', doctorsControllers.registerOTP);
router.post('/register/verify-otp', doctorsControllers.verifyRegisterOTP);
router.post('/login/send-otp', doctorsControllers.loginOTP);
router.post('/login/verify-otp', doctorsControllers.verifyLoginOTP);

// Docot Auth Token verificaiton route
router.get('/verify-token', verifyDoctorToken, async (req, res) => {
    try{
        res.json({ Status: "ok", doctorId: req.doctorId })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Doctor using routes
router.get('/doctor-info/:doctorId', doctorsControllers.getDoctorInfo);

// Form Data
router.post('/doctor-contact-form', doctorsControllers.sendContactFormDataToEmail)


module.exports = router;
