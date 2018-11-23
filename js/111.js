/**
 * Created by 93659 on 2018/11/9.
 */
const mongoose = require('mongoose');
const promise = new Promise((resolve, reject) => {
  mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true});
  mongoose.connection.once('open', err => {
    if (!err) {
      console.log('连接数据库成功')
      resolve()
    } else {
      console.log(err);
      reject(err)
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
    info: Schema.Types.Mixed,
    sex:String,
    createTime: {
      type: Date,
      default: Date.now
    }
  })
  const Teachers = mongoose.model('Teachers', TeachersSchema)
  // const result = await Teachers.find({age: {$gt: 900}}, {__v: 0}, {_id: 0})
  // console.log(result);
  // const result2 = await Teachers.updateOne({age:1400},{sex:'男'})
  // const result3 = await Teachers.deleteOne({age:1400});
  const result =await Teachers.create({
    name:'沙僧',
    age:1200,
    sex:'男',
    info:'打翻琉璃盏，吃人，挑担'
  })
  // console.log(result2);
  console.log('数据保存成功')
})()