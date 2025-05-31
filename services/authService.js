// services/authService.js

const bcrypt = require('bcryptjs');
const Partner = require('../models/mongo/Partner');
const { generateToken } = require('../utils/jwtUtil');

const users = {}; // in-memory store for OTP (demo purpose)

exports.signupUser = async ({ email, password, role }) => {
  const existing = await Partner.findOne({ email });
  if (existing) {
    throw new Error('User already exists');
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = new Partner({
    email,
    password: hashed,
    role,
    name: email.split('@')[0],
  });
  await user.save();

  return generateToken(user);
};

exports.loginUser = async ({ email, password }) => {
  const user = await Partner.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  return generateToken(user);
};

exports.generateOtpForUser = (email) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  users[email] = otp;
  return otp;
};

exports.verifyOtp = async (email, otp) => {
  if (users[email] !== otp) {
    throw new Error('Invalid OTP');
  }

  let user = await Partner.findOne({ email });
  if (!user) {
    user = new Partner({
      email,
      password: '',
      role: 'client',
      name: email.split('@')[0],
    });
    await user.save();
  }

  delete users[email];
  return generateToken(user);
};
