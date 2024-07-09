const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

// User Routes
router.get('/', userControllers.getUserInfo);

// User Authentication
router.post('/send-otp', userControllers.loginOTP);
router.post('/verify-otp', userControllers.verifyOTP);


module.exports = router;
