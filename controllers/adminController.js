

const { sendResponse } = require('../utils/responseUtil');
const adminService = require('../services/adminService');

exports.getPendingPartners = async (req, res) => {
  try {
    const partners = await adminService.getPendingPartners();
    sendResponse(res, 200, true, 'Pending partner verifications', { partners });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};


exports.verifyPartner = async (req, res) => {
  try {
    const { partnerId } = req.params;
    const { comment } = req.body;

    const updatedPartner = await adminService.verifyPartner(partnerId, comment);
    
    sendResponse(res, 200, true, 'Partner verified', updatedPartner);
  } catch (err) {
    sendResponse(res, err.message === 'Partner not found' ? 404 : 500, false, err.message);
  }
};


exports.rejectPartner = async (req, res) => {
  try {
    const { partnerId } = req.params;
    const { comment } = req.body;

    await adminService.rejectPartner(partnerId, comment);
    sendResponse(res, 200, true, 'Partner rejected');
  } catch (err) {
    sendResponse(res, err.message === 'Partner not found' ? 404 : 500, false, err.message);
  }
};

exports.getStats = async (req, res) => {
  try {
    const stats = await adminService.getStats();
    sendResponse(res, 200, true, 'Admin stats', { stats });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};
