// External dependencies
const express = require('express');

// Internal dependencies
const logger = require('../services/logger');
const userRouter = require('./user');
const router = express.Router();

const getRoutes = () => {
  // Default /GET route
  router.get('/', (req, res) => {
    res.status(200).json({ message: 'ok' });
  });

  router.use('/user', userRouter);

  logger.info('Routes Registered Sucessfully.');

  return router;
};

module.exports = getRoutes;
