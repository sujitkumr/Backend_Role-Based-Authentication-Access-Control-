const KPI = require('../models/pg/KPI');

exports.getStats = async () => {
  return await KPI.getStats();
};
