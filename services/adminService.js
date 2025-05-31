// services/adminService.js

const Partner = require('../models/mongo/Partner');
const KPI = require('../models/pg/KPI');

exports.getPendingPartners = async () => {
  return await Partner.find({ verificationStatus: 'pending' });
};


exports.verifyPartner = async (partnerId, comment = '') => {
  const partner = await Partner.findById(partnerId);
  if (!partner) throw new Error('Partner not found');

  partner.verificationStatus = 'verified';
  partner.verificationComment = comment;
  const updatedPartner = await partner.save();

  return updatedPartner; 
};


exports.rejectPartner = async (partnerId, comment = '') => {
  const partner = await Partner.findById(partnerId);
  if (!partner) throw new Error('Partner not found');

  partner.verificationStatus = 'rejected';
  partner.verificationComment = comment;
  await partner.save();
};

exports.getStats = async () => {
  return await KPI.getStats(); 
};
