var mongoose = require('mongoose');
var express = require('express');
var methodOverride = require("method-override");
var app = express();



mongoose.connect('mongodb://localhost:27017/magic_api')

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

var routes = require('./config/routes');
app.use(routes);

app.listen(3000);
