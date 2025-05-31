const express = require('express');
const router = express.Router();
const inquiryController = require('../controllers/inquiryController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.use(authMiddleware);

router.post('/', roleMiddleware('client'), inquiryController.createInquiry);
router.get('/', roleMiddleware('partner'), inquiryController.getAssignedLeads);
router.patch('/:id/status', roleMiddleware(['partner', 'admin']), inquiryController.updateStatus);

module.exports = router;
