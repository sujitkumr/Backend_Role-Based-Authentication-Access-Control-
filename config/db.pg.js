require('dotenv').config();

const { Pool } = require('pg');
console.log('PG_USER:', process.env.PG_USER);
console.log('PG_DATABASE:', process.env.PG_DATABASE);
console.log('PG_PORT:', process.env.PG_PORT);

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: parseInt(process.env.PG_PORT, 10),
});


const connectPostgres = async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('PostgreSQL connected');
  } catch (err) {
    console.error('PostgreSQL connection error:', err.message);
    process.exit(1);
  }
};

module.exports = { connectPostgres, pool };
