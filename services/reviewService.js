const Review = require('../models/mongo/Review');

exports.createReview = async (clientId, data) => {
  const { partnerId, rating, comment } = data;

  const review = new Review({
    clientId,
    partnerId,
    rating,
    comment,
  });

  return await review.save();
};

exports.getReviewsByPartner = async (partnerId) => {
  return await Review.find({ partnerId }).sort({ createdAt: -1 });
};
