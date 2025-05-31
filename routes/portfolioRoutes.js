const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.use(authMiddleware);
router.use(roleMiddleware('partner'));

router.post('/', portfolioController.createPortfolio);
router.get('/', portfolioController.getPortfolios);

module.exports = router;
