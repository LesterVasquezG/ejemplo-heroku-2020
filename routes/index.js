var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'lester', carrera:'ico',
    acciones:[
              {accion:"abrir"},
              {accion:"Cerrar"},
              {accion:"no hacer nada"},
              {accion:"dormir"}
            ]
          });
});
router.get('/hola',(req,res,next)=>{
  res.render('home',{saludo:'hola que pedo'});
});
module.exports = router;
