var express = require("express");
var router = express.Router();

var usersController = require('../controllers/usersController');

router.route('/users')
  .post(usersController.newUser)

router.route('/users/id')
  .get(usersController.showUser)

module.exports = router