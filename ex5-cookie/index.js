/**
 * Created by 93659 on 2018/11/12.
 */

const express = require('express');

const db = require('./db');
const userRouter = require('./router/userRouter');
const uiRouter = require('./router/uiRouter');
const app = express();
// app.use(express.static('public'));
app.set('views','./views');
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}));

db
  .then(() => {
  app.use(userRouter);
  app.use(uiRouter)

  })


app.listen(3000, err => {
  if (!err) console.log('服务器启动成功');
  else console.log(err);
})
