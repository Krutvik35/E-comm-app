const { body, validationResult } = require('express-validator');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const validatorcheckerinSignup = [
  body('username').isLength({ min:4, max:20 }).trim().notEmpty().withMessage('username is not in current format'),
  body('email').isEmail().normalizeEmail().withMessage('email id in not currect'),
  body('password').isLength({ min:8 }).withMessage('password must be 8 charcter'),
  body('confirmpassword').isLength({ min:8 }).custom((value,{ req })=>{
    return value === req.body.password;
  }).withMessage('not same as password'),
  body('gender').isIn([ 'male', 'female', 'other' ]).withMessage('either alien or superhuman'),
];

const SignupLogic = async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ error: errors.array() });
  }
  const { username, email, password, gender } = req.body;
  const alreadyUser = await User.findOne({ username:username });
  if (alreadyUser){
    res.status(403).json({ message:'already a user signup' });
  } else {
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User({
      username: username,
      password: hashedPassword,
      gender: gender,
      email: email,
    });
    newUser.save();
    res.status(200).json({ message:'user signup successfull' });
  }
};

const validationForLogin = [
  body('username').isLength({ min:4, max:20 }).trim().notEmpty().withMessage('username is empty or not in correct form'),
  body('password').isLength({ min:8 }).trim().notEmpty().withMessage('password is not in correct format'),
];

const LoginLogic = async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ error: errors.array() });
  }

  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(401).json({ msg: 'Invalid username' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ msg: 'Invalid password' });
    }

    res.status(200).json({ msg: 'User logged in successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Error in user logging', error });
  }
};

const logOutLogic = async (req, res) => {
  try {
    await res.clearCookie('token');

    return res.status(200).json({ msg:'user logout success' });
  } catch (error) {
    res.status(500).json({ msg:'error in logut' });
  }
};


module.exports = {
  validatorcheckerinSignup,
  SignupLogic,
  validationForLogin,
  LoginLogic,
  logOutLogic,
};
