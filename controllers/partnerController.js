
const partnerService = require('../services/partnerService');
const { sendResponse } = require('../utils/responseUtil');

exports.submitVerification = async (req, res) => {
  try {
    const partner = await partnerService.submitVerification(req.user.id, req.body);
    return res.status(200).json({
      success: true,
      message: 'Verification submitted',
      data: { partner }, 
    });
  } catch (err) {
    const code = err.message === 'Partner not found' ? 404 : 500;
    return res.status(code).json({
      success: false,
      message: err.message,
      data: {},
    });
  }
};


exports.dashboard = async (req, res) => {
  try {
    const partner = await partnerService.getDashboard(req.user.id);
    sendResponse(res, 200, true, 'Partner dashboard data', { partner });
  } catch (err) {
    const code = err.message === 'Partner not found' ? 404 : 500;
    sendResponse(res, code, false, err.message);
  }
};
