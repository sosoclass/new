/**
 * Created by 93659 on 2018/11/12.
 */
const express = require('express');
const app = express();

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));

function middleware(req,res,next) {
  console.log('应用级中间件被触发了');
  if(req.get('host')!=='localhost:3000'){
    res.end('error');
    return;
  }
  next()
}

app.get('/',middleware,(req,res)=>{
  console.log('根路由被触发了');
  console.log(req.xxx);
  res.end('这是跟路由服务器返回的响应');
});
app.post('/',(req,res)=>{
  console.log(req.body);
  res.send('这是post路由返回的响应')
});



app.listen(3000,err=>{
  if(!err) console.log('服务器启动成功');
  else console.log(err);
})
