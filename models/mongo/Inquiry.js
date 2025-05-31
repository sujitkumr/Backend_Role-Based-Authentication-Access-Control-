const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
  budget: Number,
  city: String,
  referenceImageUrl: String,
  assignedPartnerIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Partner' }],
status: {
  type: String,
  enum: ['pending', 'accepted', 'rejected', 'completed'],
  default: 'pending'
}
,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Inquiry', inquirySchema);
