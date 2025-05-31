const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'partner' },
  personalDetails: {
    phone: String,
    address: String,
    city: String,
    aadharNumber: String,
    documents: [String],
  },
  serviceDetails: {
    categories: [String],
    description: String,
  },
  portfolio: [
    {
      url: String,
      description: String,
      index: Number,
    },
  ],
  verificationStatus: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending',
  },
  verificationComment: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Partner', partnerSchema);


