const { Pool } = require('pg');

const connectionString = `postgres://iumdeunt:86vr0BmdWB4B7QHkSO0H0Os7Unx7SHgk@castor.db.elephantsql.com/iumdeunt`;

const pool = new Pool({
  connectionString
});

module.exports = pool;
