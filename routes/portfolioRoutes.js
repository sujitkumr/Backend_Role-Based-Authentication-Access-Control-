const express = require('express');
const router = express.Router();
const controller = require('../controllers/portfolioController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.use(authMiddleware);
router.use(roleMiddleware('partner'));

router.get('/', controller.getPortfolios);
router.post('/', controller.addEntry);
router.put('/:index', controller.updateEntry);
router.delete('/:index', controller.deleteEntry);
router.put('/reorder', controller.reorderPortfolio);

module.exports = router;
