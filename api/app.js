var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.connect('mongodb://localhost:27017/magic_api')

var routes = require('./config/routes');

app.use(routes);

app.listen(3000);
