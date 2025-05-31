const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.use(authMiddleware);

// Anyone can get reviews by partner
router.get('/:partnerId', reviewController.getReviewsByPartner);

// Clients can create reviews
router.post('/', roleMiddleware('client'), reviewController.createReview);

// Clients and Admin can update/delete their own reviews
router.put('/:id', roleMiddleware(['client', 'admin']), reviewController.updateReview);
router.delete('/:id', roleMiddleware(['client', 'admin']), reviewController.deleteReview);

module.exports = router;
