const { pool } = require('../../config/db.pg');

class Category {
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM categories ORDER BY name ASC');
    return rows;
  }

  static async create(name) {
    const { rows } = await pool.query('INSERT INTO categories(name) VALUES($1) RETURNING *', [name]);
    return rows[0];
  }

  static async update(id, name) {
    const { rows } = await pool.query('UPDATE categories SET name=$1 WHERE id=$2 RETURNING *', [name, id]);
    return rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM categories WHERE id=$1', [id]);
  }
}

module.exports = Category;
