const kpiService = require('../services/kpiService');
const { sendResponse } = require('../utils/responseUtil');

exports.getStats = async (req, res) => {
  try {
    const stats = await kpiService.getStats();
    sendResponse(res, 200, true, 'KPI stats fetched', { stats });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};
