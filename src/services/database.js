const mongoose = require('mongoose');

const config = require('../config/default');
const logger = require('./logger');

const connectDB = async () => {
  try {
    await mongoose.connect(config.database.db_uri, { dbName:'node-app', autoCreate:true });
    logger.info('Database Connection successful');
  } catch (ex) {
    logger.error(`[critical error] - Connection to Database failed. ${JSON.stringify(ex)}`);
  }
};

module.exports = connectDB;
