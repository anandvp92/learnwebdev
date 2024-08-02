var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var db = "mongodb://localhost:27017/example";


router.get('/',(req,res,next)=>{
res.render("login",{});
});


router.post('/',(req,res,next)=>{
    
console.log(req.body.username);
res.send(req.body.username);






});


module.exports=router;