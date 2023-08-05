const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  node_env: process.env.NODE_ENV,
  port: process.env.SERVER_PORT || 9001,
  database: {
    db_uri: process.env.DB_URI,
  },
};
