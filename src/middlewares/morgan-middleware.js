const morgan = require('morgan');

const logger = require('../services/logger');

logger.info(`
          MORGAN FORMAT: 'morganFormat'
      `);

const morganFormat = (tokens, req, res) => {
  const logEntry = `${tokens['status'](req, res)} ${tokens['method'](req, res)} ${tokens['url'](req, res)} ${tokens['response-time'](req, res)}`;
  logger.log(tokens['status'](req,res) >= 400 ? 'error' : 'info', logEntry);

  return;
};

const morganMiddleware = morgan(morganFormat);

module.exports = morganMiddleware;
