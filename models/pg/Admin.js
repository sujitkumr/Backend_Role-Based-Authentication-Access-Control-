const { pool } = require('../../config/db.pg');

class Admin {
  static async findByEmail(email) {
    const { rows } = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);
    return rows[0];
  }
}

module.exports = Admin;
