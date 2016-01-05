var express = require("express");
var router = express.Router();

router.route('/users/id')
  .get(usersController.usersShow)
  .post(usersController.usersPost)

module.exports = router