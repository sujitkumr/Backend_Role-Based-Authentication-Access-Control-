
const portfolioService = require('../services/portfolioService');
const { sendResponse } = require('../utils/responseUtil');

exports.createPortfolio = async (req, res) => {
  try {
    const portfolio = await portfolioService.createPortfolio(req.user.id, req.body);
    sendResponse(res, 201, true, 'Portfolio created', { portfolio });
  } catch (err) {
    const code = err.message === 'Title and images required' ? 400 : 500;
    sendResponse(res, code, false, err.message);
  }
};

exports.getPortfolios = async (req, res) => {
  try {
    const portfolios = await portfolioService.getPortfolios(req.user.id);
    sendResponse(res, 200, true, 'Portfolios retrieved', { portfolios });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};
