const { pool } = require('../../config/db.pg');

class Location {
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM locations ORDER BY name ASC');
    return rows;
  }

  static async create(name) {
    const { rows } = await pool.query('INSERT INTO locations(name) VALUES($1) RETURNING *', [name]);
    return rows[0];
  }

  static async update(id, name) {
    const { rows } = await pool.query('UPDATE locations SET name=$1 WHERE id=$2 RETURNING *', [name, id]);
    return rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM locations WHERE id=$1', [id]);
  }
}

module.exports = Location;
