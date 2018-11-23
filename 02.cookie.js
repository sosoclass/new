const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/testCookie01', (req, res) => {
  //返回一个cookie给用户
  //设置cookie
  res.cookie('userid', 'sunwukong', {maxAge: 1000 * 3600 * 24});
  //返回响应
  res.send('这是服务器返回的响应~');
})

app.get('/testCookie02', (req, res) => {
  //获取cookie
  console.log(req.cookies);
  /*
    { 'Webstorm-129da853': '8726c2d8-3b88-48b8-8db0-dd82e62fb79a',
  userid: 'sunwukong' }
   */
  //返回响应
  res.send('这是服务器返回的响应~');
})

app.get('/testCookie03', (req, res) => {
  //删除cookie
  // res.clearCookie('userid');
  res.cookie('userid', '', {maxAge: 0});
  //返回响应
  res.send('这是服务器返回的响应~');
})


app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})