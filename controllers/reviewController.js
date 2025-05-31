const reviewService = require('../services/reviewService');
const { sendResponse } = require('../utils/responseUtil');

exports.createReview = async (req, res) => {
  try {
    const review = await reviewService.createReview(req.user.id, req.body);
    sendResponse(res, 201, true, 'Review submitted', { review });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.getReviewsByPartner = async (req, res) => {
  try {
    const reviews = await reviewService.getReviewsByPartner(req.params.partnerId);
    sendResponse(res, 200, true, 'Reviews fetched', { reviews });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};
