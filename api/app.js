var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.connect('mongodb://localhost:27017/magic_api')
app.listen(3000, function(){
  console.log("Yes Mother");
});
