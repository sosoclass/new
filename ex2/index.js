/**
 * Created by 93659 on 2018/11/12.
 */

const express = require('express');

const db = require('./db');
const Users = require('./models/users');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

db
  .then(() => {
    app.post('/register', async (req, res) => {
      const {username, pwd, rePwd, email} = req.body;
      const usernameReg = /^[A-Za-z0-9_]{5,15}$/;
      const pwdReg = /^[A-Za-z0-9_]{5,20}$/;
      const emailReg = /^[A-Za-z0-9_]{3,8}@[A-Za-z0-9_]{2,8}\.com$/;
      if (!usernameReg.test(username)) {
        res.send('用户名可以包含英文字母、数字、下划线，长度为5-15')
        return;
      } else if (!pwdReg.test(pwd)) {
        res.send('密码可以包含英文字母、数字、下划线，长度为5-20')
        return;
      } else if (pwd !== rePwd) {
        res.send('两次密码输入不一致，请重新输入')
        return;
      } else if (!emailReg.test(email)) {
        res.send('邮箱格式不正确，请重新输入')
        return;
      }
      try {
        const user = await Users.findOne({username});
        if (user) {
          res.send('用户名已存在，请重新输入')
        } else {
          await Users.create({username, pwd, email})
          res.send('用户注册成功')
        }
      } catch (e) {
        console.log(e);
        res.send('网络不稳定，请刷新重试')
      }

    })

    app.post('/login',async(req,res)=>{
      const {username,pwd} = req.body;

      try {
        const user = await Users.findOne({username,pwd});
        if(user){
          res.send('用户登录成功')
        }else {
          res.send('用户密码错误')
        }
      }catch (e){
        console.log(err);
        res.send('网路不稳定，请刷新重试')
      }
    })
    app.get('/login',(req,res)=>{
      res.sendFile(__dirname+'/public/login.ejs');
    })
    app.get('/register',(req,res)=>{
      res.sendFile(__dirname+'/public/register.ejs');
    })
  })


app.listen(3000, err => {
  if (!err) console.log('服务器启动成功');
  else console.log(err);
})
