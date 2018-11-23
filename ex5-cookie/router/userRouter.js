/**
 * Created by 93659 on 2018/11/12.
 */
const express = require('express');
const Users = require('../models/users');
const Router = express.Router;
const router = new Router();

router.post('/register', async (req, res) => {
  const {username, pwd, rePwd, email} = req.body;
  const usernameReg = /^[A-Za-z0-9_]{5,15}$/;
  const pwdReg = /^[A-Za-z0-9_]{5,20}$/;
  const emailReg = /^[A-Za-z0-9_]{3,8}@[A-Za-z0-9_]{2,8}\.com$/;


  let errMsg = {
    username,
    email
  };

  if (!usernameReg.test(username)) {
    errMsg.usernameErr = ('用户名可以包含英文字母、数字、下划线，长度为5-15')
    // return;
  }if (!pwdReg.test(pwd)) {
    errMsg.pwdErr =('密码可以包含英文字母、数字、下划线，长度为5-20')
    // return;
  }if (pwd !== rePwd) {
    errMsg.rePwd =('两次密码输入不一致，请重新输入');
    // return;
  } if (!emailReg.test(email)) {
    errMsg.emailErr =('邮箱格式不正确，请重新输入');
    // return;
  }
  if(errMsg.usernameErr||errMsg.pwdErr||errMsg.rePwd||errMsg.emailErr){
    res.render('register',{errMsg});
    return;
  }
  try {
    const user = await Users.findOne({username});
    if (user) {
      // res.send('用户名已存在，请重新输入')
      errMsg.usernameErr = '用户名已存在，请重新输入';
      res.render('register',{errMsg});
    } else {
      await Users.create({username, pwd, email});
      // res.send('用户注册成功')
      res.redirect('/login');
    }
  } catch (e) {
    console.log(e);
    // res.send('网络不稳定，请刷新重试');
    errMsg.networkErr = '网络不稳定，请刷新重试';
    res.render('resgister',{errMsg});
  }

});

router.post('/login',async(req,res)=>{
  const {username,pwd} = req.body;

  try {
    const user = await Users.findOne({username,pwd});
    if(user){
      // res.send('用户登录成功')
      res.redirect(`/userCenter?username=${username}`)
    }else {
      // res.send('用户密码错误')
      res.render('login',{errMsg:'用户名或密码错误'})
    }
  }catch (e){
    console.log(e);
    // res.send('网路不稳定，请刷新重试')
    res.render('login',{errMsg:'网络不稳定，请刷新重试'})
  }
})

module.exports = router;