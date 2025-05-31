const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.use(authMiddleware);


router.post('/', roleMiddleware('client'), reviewController.createReview);


router.get('/:partnerId', reviewController.getReviewsByPartner);

module.exports = router;
