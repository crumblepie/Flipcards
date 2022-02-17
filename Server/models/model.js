const { Pool } = require("pg");

// replace with your own SQL URI for more control over the db
const connectionString = `postgres://iumdeunt:86vr0BmdWB4B7QHkSO0H0Os7Unx7SHgk@castor.db.elephantsql.com/iumdeunt`;

const pool = new Pool({
  connectionString,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
