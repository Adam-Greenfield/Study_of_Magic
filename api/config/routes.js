var express = require("express");
var router = express.Router();

router.route('/users/id')
  .get(usersController.usersShow)
  .post(usersController.newUser)

module.exports = router