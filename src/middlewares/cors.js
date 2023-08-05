// external dependency
const _ = require('lodash');

const supportedMethods = [
  'GET',
  'PUT',
  'POST',
  'DELETE',
  'OPTIONS',
  'PATCH'
];

const supportedHeaders = [
  'Content-Type',
  'Authorization',
  'X-File-Name',
  'X-Requested-With',
  'Chace-control',
  'Accept',
  'Origin',
  'X-Session-ID'
];

const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', supportedMethods.join(', '));
  res.setHeader('Access-Control-Allow-Headers', supportedHeaders.join(', '));

  let origin = req.get('origin');

  if (_.isNil(origin)) {
    origin = '*';
  }

  res.setHeader('Access-Control-Allow-Origin', origin);

  // if CORS options request, respont 200
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
};

module.exports = cors;