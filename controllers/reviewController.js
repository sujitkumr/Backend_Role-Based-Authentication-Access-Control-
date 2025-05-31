const reviewService = require('../services/reviewService');
const { sendResponse } = require('../utils/responseUtil');

exports.getReviewsByPartner = async (req, res) => {
  try {
    const reviews = await reviewService.getReviewsByPartner(req.params.partnerId);
    sendResponse(res, 200, true, 'Reviews fetched', { reviews });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.createReview = async (req, res) => {
  try {
    const review = await reviewService.createReview(req.user.id, req.body);
    sendResponse(res, 201, true, 'Review created', { review });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.updateReview = async (req, res) => {
  try {
    const updated = await reviewService.updateReview(req.user.id, req.params.id, req.body);
    sendResponse(res, 200, true, 'Review updated', { review: updated });
  } catch (err) {
    sendResponse(res, 404, false, err.message);
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await reviewService.deleteReview(req.user.id, req.params.id);
    sendResponse(res, 200, true, 'Review deleted');
  } catch (err) {
    sendResponse(res, 404, false, err.message);
  }
};
