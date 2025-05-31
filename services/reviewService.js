const Review = require('../models/mongo/Review');

exports.getReviewsByPartner = async (partnerId) => {
  return await Review.find({ partnerId }).sort({ createdAt: -1 });
};

exports.createReview = async (clientId, data) => {
  const { partnerId, rating, comment } = data;

  const review = new Review({ clientId, partnerId, rating, comment });
  return await review.save();
};

exports.updateReview = async (clientId, reviewId, data) => {
  const review = await Review.findOne({ _id: reviewId, clientId });
  if (!review) throw new Error('Review not found or not authorized');
  
  if (data.rating !== undefined) review.rating = data.rating;
  if (data.comment !== undefined) review.comment = data.comment;

  return await review.save();
};

exports.deleteReview = async (clientId, reviewId) => {
  const review = await Review.findOneAndDelete({ _id: reviewId, clientId });
  if (!review) throw new Error('Review not found or not authorized');
  return;
};
