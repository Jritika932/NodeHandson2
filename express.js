const express = require('express')
 const app = express()
 app.get('/api/main', function(req,res){
    res.send('Hi I am Ritika Joshi')
  

 })
 app.listen(6000, function(){
    console.log('Hi Application is running')
 })