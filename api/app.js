var mongoose       = require('mongoose');
var express        = require('express');
var methodOverride = require("method-override");
var bodyParser     = require('body-parser');
var passport       = require('passport');
var jwt            = require('jsonwebtoken');
var expressJWT     = require('express-jwt');
var app            = express();



mongoose.connect('mongodb://localhost:27017/magic_api')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use('/api', expressJWT({ secret: secret })
  .unless({
    path: [
      { url: '/api/login', methods: ['POST'] },
      { url: '/api/register', methods: ['POST'] }
    ]
  }));

var routes = require('./config/routes');
app.use('/api', routes);

app.listen(3000);
