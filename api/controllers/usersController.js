var User= require('../models/User.js');

  function newUser(req, res){
    console.log('in new user');
    var user = new User(req.body)
  
    user.save(function(err){
      if(error)
        res.json({ message: 'Could not create new user because' + err });
  
        res.json({ user: user });
    });
  }

  // function showUser(req, res){

  // }

module.exports = {
  newUser: newUser
}