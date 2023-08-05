const winston = require('winston');
const { timestamp, combine, printf ,errors, colorize } = winston.format;

const logFormat = printf(({ message, timestamp, stack }) => {
  return `[service-api] - ${timestamp} : ${stack || message}`;
});

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }),
    colorize({ all: true }),
    logFormat
  ),
  transports: [new winston.transports.Console()],
  exitOnError: false,
});

logger.info('Logger Online.');

module.exports = logger;