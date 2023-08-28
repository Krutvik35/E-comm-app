const express = require('express');
const { validatorchecker, SignupLogic, validationForLogin, LoginLogic, logOutLogic } = require('../controller/user');
const userRouter = express.Router();

userRouter.post('/signup', validatorchecker, SignupLogic);
userRouter.post('/login', validationForLogin, LoginLogic);
userRouter.get('/logout', logOutLogic);

module.exports = userRouter;