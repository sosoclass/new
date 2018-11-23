/**
 * Created by 93659 on 2018/11/7.
 */
//简单写入文件
const fs = require('fs');


//异步
// fs.writeFile('./a.txt','今天天气真好',err=>{
//   if(!err){
//     console.log(err);
//     console.log('方法没出错');
//   }else{
//
//     console.log('方法出错了');
//   }
// })

function fun(n,o) {
  console.log(o);
  return {
    fun:function (m) {
      return fun(m,n);
    }
  }
}
let a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3);
