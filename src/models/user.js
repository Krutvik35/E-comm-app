const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type:String,
    required:[true,'Username is Required'],
    unique:true,
  },
  password:{
    type : String,
    minlength: [8],
    required:true,
  },
  email:{
    type:String,
    lowercase:true,
    required:true,
  },
  gender:{
    type:String,
    enum:['male','female','other'],
  },
},{ timestamps:true });

const User = mongoose.model('User',userSchema);

module.exports = User;