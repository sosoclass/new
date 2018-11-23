/**
 * Created by 93659 on 2018/11/12.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:{
    type:String,
    unique:true,
    required:true
  },
  pwd:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  }
})
const Users = mongoose.model('users',userSchema)
module.exports = Users;