const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.use(authMiddleware);
router.use(roleMiddleware('admin'));

router.get('/pending-partners', adminController.getPendingPartners);
router.post('/verify-partner/:partnerId', adminController.verifyPartner);
router.post('/reject-partner/:partnerId', adminController.rejectPartner);
router.get('/stats', adminController.getStats);

module.exports = router;
