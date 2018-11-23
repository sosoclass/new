/**
 * Created by 93659 on 2018/11/13.
 */
// const express = require('express');
// const app = express();
//
// app.use(express.static('public'));
//
// app.get('/textAjex',(req,res)=>{
//   console.log(req.query);
//   res.send('服务器返回的响应');
// });
//
//
// app.listen(3000,err=>{
//   if(!err) console.log('服务器连接成功');
//   else console.log(err);
// });



const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/testAjex',(req,res)=>{
  console.log(req.query);
  res.send('服务器返回的响应')

});


app.listen(3000,err=>{
  if(!err) console.log('服务器连接成功');
  else console.log(err);
})