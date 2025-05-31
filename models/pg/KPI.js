const { pool } = require('../../config/db.pg');

class KPI {
  static async getStats() {
    // example counts for demo purpose
    const { rows: clients } = await pool.query('SELECT COUNT(*) FROM clients');
    const { rows: partners } = await pool.query('SELECT COUNT(*) FROM partners');
    const { rows: pendingVerifications } = await pool.query(
      "SELECT COUNT(*) FROM partners WHERE verification_status = 'pending'"
    );
    const { rows: inquiries } = await pool.query('SELECT COUNT(*) FROM inquiries');

    return {
      totalClients: Number(clients[0].count),
      totalPartners: Number(partners[0].count),
      pendingVerifications: Number(pendingVerifications[0].count),
      totalInquiries: Number(inquiries[0].count),
    };
  }
}

module.exports = KPI;
