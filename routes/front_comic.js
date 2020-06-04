var express = require('express');
var request= require('request');
var router = express.Router();


router.get('/listar',(req,res,next)=>{
  request.get('http://localhost:3000/marvel/api/comic',(err,response, body)=>{
    if(err) response.status(404).json({mensaje:"error al consumir get commit"});
    else res.render('comic_view',{'datos':JSON.parse(body)});
  });
});

module.exports = router;
