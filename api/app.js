var mongoose       = require('mongoose');
var express        = require('express');
var methodOverride = require("method-override");
var bodyParser     = require('body-parser');
var cors           = require('cors');
var passport       = require('passport');
var jwt            = require('jsonwebtoken');
var expressJWT     = require('express-jwt');
var cookieParser   = require("cookie-parser");
var app            = express();
var config         = require('./config/config');
var secret         = require('./config/config').secret;

mongoose.connect('mongodb://localhost:27017/magic_api')

require('./config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());

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
