var Grim = require('../models/Grimoire.js');

function grimsIndex(req, res){
  Grim.find(function(err, grims){
    if (err) return res.status(404).json({message: 'Something went wrong and we could not pull the grims.'});
    res.status(200).json({ grims: grims });
  });
};

function grimsShow(req, res){
  Grim.findById(req.params.id, function(err, grim){
    if (err) return res.status(404).json({message: 'Something went wrong and we could not find the grim.'});
    res.status(200).json({ grim: grim });
  });
};
//show all
//get
//update
//create
//delete