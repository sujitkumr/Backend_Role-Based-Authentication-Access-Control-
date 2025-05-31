const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Signup and login routes supporting email/password + OTP mocked
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/otp-request', authController.otpRequest);
router.post('/otp-verify', authController.otpVerify);

module.exports = router;
