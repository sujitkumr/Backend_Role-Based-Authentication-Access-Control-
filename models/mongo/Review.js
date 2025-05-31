const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, required: true },
  partnerId: { type: mongoose.Schema.Types.ObjectId, required: true },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Review', reviewSchema);
