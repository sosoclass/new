/**
 * Created by 93659 on 2018/11/10.
 */
const express = require('express');
const app = express();

app.get('/login',(request,response)=>{
  console.log(request.query);
  response.send('<h1>这是express服务器返回的响应</h1>')
})
app.post('/register', (request, response) => {

})
app.listen(3000,err=>{
  if(!err)console.log('服务器启动了')
  else console.log(err);
})
