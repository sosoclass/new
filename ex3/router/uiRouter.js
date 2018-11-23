/**
 * Created by 93659 on 2018/11/12.
 */
const express = require('express');
const {resolve} = require('path');
const router = new express.Router();

router.get('/login', (req, res) => {
  const fileName = resolve(__dirname, '../public/login.ejs');
  res.sendFile(fileName);
})
router.get('/register', (req, res) => {
  const fileName = resolve(__dirname, '../public/register.ejs');
  res.sendFile(fileName);
})

module.exports = router;