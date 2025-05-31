// services/partnerService.js

const Partner = require('../models/mongo/Partner');

exports.submitVerification = async (partnerId, data) => {
  const { personalDetails, serviceDetails, documents, portfolio } = data;

  const partner = await Partner.findById(partnerId);
  if (!partner) throw new Error('Partner not found');

  partner.personalDetails = personalDetails || partner.personalDetails;
  partner.serviceDetails = serviceDetails || partner.serviceDetails;
  partner.personalDetails.documents = documents || partner.personalDetails.documents;
  partner.portfolio = portfolio || partner.portfolio;
  partner.verificationStatus = 'pending';

  await partner.save();
  return partner;
};

exports.getDashboard = async (partnerId) => {
  const partner = await Partner.findById(partnerId);
  if (!partner) throw new Error('Partner not found');
  return partner;
};
