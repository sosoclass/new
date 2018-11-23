/**
 * Created by 93659 on 2018/11/8.
 */
//流式写入文件
const fs = require('fs');

const ws = fs.createWriteStream('c.txt');
//绑定事件
ws.once('open',()=>{
  console.log('打开');
})
ws.once('close',()=>{
  console.log(('关闭'));
})
//写入文本
ws.write('啊啊啊啊啊');
ws.write('哈哈哈哈哈哈哈哈哈哈或111');
//关闭可写流

ws.end();