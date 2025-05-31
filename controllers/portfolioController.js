
const portfolioService = require('../services/portfolioService');
const { sendResponse } = require('../utils/responseUtil');
// Add single entry
exports.addEntry = async (req, res) => {
  try {
    const portfolio = await portfolioService.addEntry(req.user.id, req.body);
    sendResponse(res, 201, true, 'Entry added to portfolio', { portfolio });
  } catch (err) {
    sendResponse(res, 400, false, err.message);
  }
};

// Update entry by index
exports.updateEntry = async (req, res) => {
  try {
    const index = parseInt(req.params.index);
    const portfolio = await portfolioService.updateEntry(req.user.id, index, req.body);
    sendResponse(res, 200, true, 'Entry updated', { portfolio });
  } catch (err) {
    sendResponse(res, 404, false, err.message);
  }
};

// Delete entry by index
exports.deleteEntry = async (req, res) => {
  try {
    const index = parseInt(req.params.index);
    const portfolio = await portfolioService.deleteEntry(req.user.id, index);
    sendResponse(res, 200, true, 'Entry deleted', { portfolio });
  } catch (err) {
    sendResponse(res, 404, false, err.message);
  }
};

// Reorder full portfolio
exports.reorderPortfolio = async (req, res) => {
  try {
    const { order } = req.body;
    const portfolio = await portfolioService.reorder(req.user.id, order);
    sendResponse(res, 200, true, 'Portfolio reordered', { portfolio });
  } catch (err) {
    sendResponse(res, 400, false, err.message);
  }
};

// Get all entries
exports.getPortfolios = async (req, res) => {
  try {
    const portfolios = await portfolioService.getPortfolios(req.user.id);
    sendResponse(res, 200, true, 'Portfolios retrieved', { portfolios });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};
