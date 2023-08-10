// External dependencies
const express = require('express');

// Internal dependencies
const router = require('./src/routes/index');
const connectDB = require('./src/services/database');
const middlewareConfig = require('./src/utils/server/configure-express-middleware');
const config = require('./src/config/default');
const logger = require('./src/services/logger');
const pulse = require('./src/utils/heartbeat');

(async function main() {
  try {
    logger.info('Starting API service');
    const app = express();

    // Connect to Database
    await connectDB();

    // Adding necessary middlewares
    middlewareConfig(app);

    // Registering routes
    app.use('/api', router());

    app.listen(config.port, '0.0.0.0');

    logger.info('Service Api - Online.');

    setInterval(() => {
      pulse();
    }, 30000);
  } catch (ex) {
    logger.error(`[critical error] ${ex}`);
  }
})();
