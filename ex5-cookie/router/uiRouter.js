/**
 * Created by 93659 on 2018/11/12.
 */
const express = require('express');
const cookieParser = require('cookie-parser');
// const {resolve} = require('path');
const Users = require('../models/users');
const router = new express.Router();
router.use(cookieParser());

router.get('/login', (req, res) => {
  // const fileName = resolve(__dirname, '../public/login.ejs');
  // res.sendFile(fileName);
  res.render('login',{errMsg:''});
});
router.get('/register', (req, res) => {
  // const fileName = resolve(__dirname, '../public/register.ejs');
  // res.sendFile(fileName);
  res.render('register',{errMsg:{}});
});
router.get('/userCenter',async(req,res)=>{
  try{
    const {userid} = req.cookies;
    if(!userid){
      res.redirect('/login');
    }else {
      const user = await Users.findOne({_id:userid});
      if(user){
        res.render('user-center',{username:user.username});
      }else {
        res.redirect('/login');
      }
    }
  }catch(e){
    console.log(e);
    res.redirect('/login');
  }
});

module.exports = router;