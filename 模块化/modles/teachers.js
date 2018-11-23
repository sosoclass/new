/**
 * Created by 93659 on 2018/11/9.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const teachersSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  age: Number,
  sex: String,
  info: Schema.Types.Mixed,
  createTime: {
    type: Date,
    default: Date.now
  }

})
  const Teachers = mongoose.model('teachers',teachersSchema);
  module.exports = Teachers;