// const { pool } = require('../../config/db.pg');

// class Admin {
//   static async findByEmail(email) {
//     const { rows } = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);
//     return rows[0];
//   }
// }

// module.exports = Admin;


// models/postgres/Admin.js
const { pool } = require('../../config/db.pg');

class Admin {
  static async findByEmail(email) {
    const { rows } = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);
    return rows[0];
  }

  static async create({ email, password }) {
   
    const { rows } = await pool.query(
      'INSERT INTO admins(email, password) VALUES($1, $2) RETURNING *',
      [email, password]
    );
    return rows[0];
  }
}

module.exports = Admin;
