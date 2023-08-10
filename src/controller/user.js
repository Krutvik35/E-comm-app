const { body, validationResult } = require('express-validator');
const User = require();
const brcypt = require('bcrypt');

exports.postSignup = [

  body('username').trim().notEmpty().withMessage('username is not in current format'),
  body('email').isEmail().normalizeEmail().withMessage('email id in not currect'),
  body('password').isLength({ min:8 }).withMessage('password must be 8 charcter'),
  body('gender').isIn([ 'male', 'female', 'other' ]).withMessage('either alien or superhuman'),

  async (req, res, next) =>{
    const error = validationResult(req);
    if (!error.isEmpty()){
      return res.json({ error: error.array() });
    }
    next();
  },

  async (req, res) => {
    const { username, email, password, gender} = req.body;
    const alreadyUser = User.findone(u=>u.username === username);
    if (alreadyUser){
      res.status(404).json({ message:'already a user signup' });
    } else {
      const hashedPassword = await bcrypt.hash(password,10);
      const newUser = new User(req.body);
      User.save(newUser);
      res.status(200).json({ message:'user signup successfull' });
    }
  },

];
