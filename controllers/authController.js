

const { sendResponse } = require('../utils/responseUtil');
const authService = require('../services/authService');

exports.signup = async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return sendResponse(res, 400, false, 'Please provide email, password and role');
  }

  try {
    const token = await authService.signupUser({ email, password, role });
    sendResponse(res, 201, true, 'User registered successfully', { token });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return sendResponse(res, 400, false, 'Please provide email and password');
  }

  try {
    const token = await authService.loginUser({ email, password });
    sendResponse(res, 200, true, 'Login successful', { token });
  } catch (err) {
    sendResponse(res, 400, false, err.message);
  }
};


exports.otpRequest = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return sendResponse(res, 400, false, 'Email is required');
  }

  const otp = authService.generateOtpForUser(email);
  console.log(`OTP for ${email}: ${otp}`); 
  sendResponse(res, 200, true, 'OTP sent (mocked)');
};

exports.otpVerify = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return sendResponse(res, 400, false, 'Email and OTP are required');
  }

  try {
    const token = await authService.verifyOtp(email, otp);
    sendResponse(res, 200, true, 'OTP verified, login successful', { token });
  } catch (err) {
    sendResponse(res, 400, false, err.message);
  }
};
