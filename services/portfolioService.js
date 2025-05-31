const Partner = require('../models/mongo/Partner');

exports.getPortfolios = async (partnerId) => {
  const partner = await Partner.findById(partnerId);
  if (!partner) throw new Error('Partner not found');
  return partner.portfolio;
};

exports.addEntry = async (partnerId, { url, description }) => {
  const partner = await Partner.findById(partnerId);
  if (!partner) throw new Error('Partner not found');

  const newEntry = {
    url: url || 'https://dummyimage.com/600x400/000/fff',
    description: description || '',
    index: partner.portfolio.length
  };

  partner.portfolio.push(newEntry);
  await partner.save();
  return partner.portfolio;
};

exports.updateEntry = async (partnerId, index, { url, description }) => {
  const partner = await Partner.findById(partnerId);
  if (!partner || !partner.portfolio[index]) throw new Error('Entry not found');

  const entry = partner.portfolio[index];
  entry.url = url || entry.url;
  entry.description = description || entry.description;

  await partner.save();
  return partner.portfolio;
};

exports.deleteEntry = async (partnerId, index) => {
  const partner = await Partner.findById(partnerId);
  if (!partner || !partner.portfolio[index]) throw new Error('Entry not found');

  partner.portfolio.splice(index, 1);
  partner.portfolio = partner.portfolio.map((item, i) => ({ ...item, index: i }));

  await partner.save();
  return partner.portfolio;
};

exports.reorder = async (partnerId, newOrder) => {
  const partner = await Partner.findById(partnerId);
  if (!partner) throw new Error('Partner not found');

  const reordered = newOrder.map(i => partner.portfolio[i]).filter(Boolean);
  reordered.forEach((entry, i) => entry.index = i);

  partner.portfolio = reordered;
  await partner.save();
  return partner.portfolio;
};
