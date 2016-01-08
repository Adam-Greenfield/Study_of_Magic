var express = require("express");
var router = express.Router();
var passport = require("passport");

var usersController = require('../controllers/usersController');
var grimsController = require('../controllers/grimsController');
var usersController = require('../controllers/usersController');
var usersController = require('../controllers/usersController');
var authenticationsController = require('../controllers/authenticationsController');

router.post('/login', authenticationsController.login);
router.post('/register', authenticationsController.register);

// router.route('/users')
//   .post(usersController.newUser)

router.route('/users/:id')
  .get(usersController.showUser)

module.exports = router