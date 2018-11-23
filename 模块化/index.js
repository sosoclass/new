/**
 * Created by 93659 on 2018/11/9.
 */

const db = require('./db');
const Teachers = require('./modles/teachers');
(async()=>{
  const result = await Teachers.create({
    name:'猪八戒',
    age:800,
    sex:'猪',
    info:'高老庄背媳妇，调戏蜘蛛精，调戏嫦娥'
  });
  console.log(result.name);
  const result2 = await Teachers.find({age:1000});
  console.log(result2);
})();
