/**
 * Created by 93659 on 2018/11/14.
 */
const express = require('express');
const db = require('./db');
const Cities = require('./models/cities');
const app = express();

app.use(express.static('public'));

;(async()=>{
  await db;
  app.get('/province',async(req,res)=>{
    try{
      const province = await Cities.find({level:1},{province:1,name:1,_id : 0};
      res.json({code:1,data:province});
      )
    }catch (e){
      console.log(e);
      res.json({code:0,err:'网络不稳定请刷新试试'})
    }

  })
  app.get('/city',async(req,res)=>{

    const {province} = req.query;
    if(!province){
      res.json({code:2,err:'请选择省份'})
    }
    try{
      const city = await Cities.find({level:2,province},{province:1,name:1,_id : 0};
      res.json({code:1,data:city});
    )
    }catch (e){
      console.log(e);
      res.json({code:0,err:'网络不稳定请刷新试试'})
    }

  });
  app.get('/county', async (req, res) => {
    const {province, city} = req.query;
    if (!province && !city) {
      res.json({code: 2, err: '请选择省份或者城市'})
    }
    try {
      const county = await Cities.find({level: 3, province, city}, {county: 1, name: 1, _id: 0});
      res.json({code: 1, data: county});
    } catch (e) {
      console.log(e);
      res.json({code: 0, err: '网络不稳定，请刷新试试'})
    }
  })
})();







app.listen(4000,err=>{
  if(!err) console.log('服务器启动成功');
  else console.log(err);
})