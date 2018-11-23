/**
 * Created by 93659 on 2018/11/9.
 */
const mongoose = require('mongoose');

const promise = new Promise((resolve, reject) => {
  mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true});
  mongoose.connection.once('open', err => {
    if (!err) {
      console.log('数据库连接成功')
      resolve();
    } else {
      console.log(err);
      reject(err);
    }
  })
});


(async () => {
  await promise;
  const Schema = mongoose.Schema;
  const TeachersSchema = new Schema({
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
  const Teachers = mongoose.model('Teachers', TeachersSchema)
  const result = await Teachers.find({age: {$gte: 18}}, {__v: 0, _id: 0});
  console.log(result);
  console.log('数据保存成功~');
})()
