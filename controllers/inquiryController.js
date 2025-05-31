
const inquiryService = require('../services/inquiryService');
const { sendResponse } = require('../utils/responseUtil');

exports.createInquiry = async (req, res) => {
  try {
    const inquiry = await inquiryService.createInquiry(req.user.id, req.body);
    sendResponse(res, 201, true, 'Inquiry created and assigned', { inquiry });
  } catch (err) {
    sendResponse(res, 400, false, err.message);
  }
};

exports.getAssignedLeads = async (req, res) => {
  try {
    const leads = await inquiryService.getAssignedLeads(req.user.id);
    sendResponse(res, 200, true, 'Assigned inquiries', { inquiries: leads });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const updated = await inquiryService.updateStatus(req.params.id, req.body.status);
    sendResponse(res, 200, true, 'Inquiry status updated', { inquiry: updated });
  } catch (err) {
    const code = err.message === 'Inquiry not found' ? 404 : 400;
    sendResponse(res, code, false, err.message);
  }
};
