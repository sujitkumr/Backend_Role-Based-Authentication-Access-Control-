
const Portfolio = require('../models/mongo/Portfolio');

exports.createPortfolio = async (partnerId, data) => {
  const { title, description, images } = data;

  if (!title || !images || images.length === 0) {
    throw new Error('Title and images required');
  }

  const portfolio = new Portfolio({
    partnerId,
    title,
    description,
    images,
  });

  await portfolio.save();
  return portfolio;
};

exports.getPortfolios = async (partnerId) => {
  const portfolios = await Portfolio.find({ partnerId });
  return portfolios;
};
