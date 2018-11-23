/**
 * Created by 93659 on 2018/11/13.
 */
// const express = require('express');
// const app = express();
//
// app.use(express.static('public'));
//
//
// app.get('/testAjax',(req,res)=>{
//   setTimeout(()=>{
//     res.send('1111')
//   },1000)
// })
//
//
//
// app.listen(3000,err=>{
//   if(!err) console.log('服务器启动成功');
//   else console.log(err);
// })




const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/testAjax',(req,res)=>{
  setTimeout(()=>{
    res.send('牛逼牛逼真牛逼')
  },1000)
})



app.listen(3000,err=>{
  if(!err) console.log('服务器启动成功');
  else console.log(ell);
})


