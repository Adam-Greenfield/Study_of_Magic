var User = require('../models/User.js');

  function newUser(req, res){
    console.log('in new user');

    var user = new User(req.body)
  
    user.save(function(err){
      if(err){
        console.log('in err'); 
        res.status(404).json({ message: 'Could not create new user because' + err });
      }
      else
        res.status(200).json({ user: user });
    });
  }

  function showUser(req, res){
    var id = req.params.id
    console.log('here');

    User.findById({_id: id}, function(err, user){
      if(err) res.json({ message: "could not find user because" + err });

      res.json({ user: user });
    });
  }

module.exports = {
  newUser: newUser,
  showUser: showUser
}