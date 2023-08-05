// External dependencies
const bodyParser = require('body-parser');

// Internal dependencies
const cors = require('../../middlewares/cors');
const morganMiddleware = require('../../middlewares/morgan-middleware');
const logger = require('../../services/logger');

const configure = (app) => {
  try {
    // Setting up morgan to log incoming requests
    app.use(morganMiddleware);

    // parse application/x-www-form-urlencoded
    app.use(
      bodyParser.urlencoded({
        extended: true,
        parameterLimit: 1000,
        limit: 1024 * 1024 * 10,
      }),
    );

    // parse application/json
    app.use(bodyParser.json());

    // add CORS middleware
    app.all('*', cors);

    return app;
  } catch (ex) {
    logger.error(`[critical error] ${JSON.stringify(ex)}`);
  }
};

module.exports = configure;
