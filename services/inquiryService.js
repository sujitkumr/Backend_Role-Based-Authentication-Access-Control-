// services/inquiryService.js

const Inquiry = require('../models/mongo/Inquiry');
const Partner = require('../models/mongo/Partner');

exports.createInquiry = async (clientId, data) => {
  const { category, date, budget, city, referenceImageUrl } = data;
  if (!category || !date) throw new Error('Category and date required');

  const inquiry = new Inquiry({
    clientId,
    category,
    date,
    budget,
    city,
    referenceImageUrl,
  });

  const partners = await Partner.find({
    'serviceDetails.categories': category,
    'personalDetails.city': city,
    verificationStatus: 'verified',
  });

  inquiry.assignedPartnerIds = partners.map((p) => p._id);
  await inquiry.save();
  return inquiry;
};

exports.getAssignedLeads = async (partnerId) => {
  return await Inquiry.find({ assignedPartnerIds: partnerId });
};

exports.updateStatus = async (inquiryId, status) => {
  const validStatuses = ['pending', 'accepted', 'rejected', 'completed'];
  if (!validStatuses.includes(status)) throw new Error('Invalid status');

  const inquiry = await Inquiry.findById(inquiryId);
  if (!inquiry) throw new Error('Inquiry not found');

  inquiry.status = status;
  await inquiry.save();
  return inquiry;
};
