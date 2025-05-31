const express = require('express');
const router = express.Router();
const partnerController = require('../controllers/partnerController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.use(authMiddleware);
router.use(roleMiddleware('partner'));

router.post('/submit-verification', partnerController.submitVerification);
router.get('/dashboard', partnerController.dashboard);

module.exports = router;
