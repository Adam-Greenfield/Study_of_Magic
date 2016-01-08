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

function grimCreate(req, res){
  var grim = new Grim({
    name: req.body.name,
    incantation: req.body.incantation,
    description: req.body.description,
    manaCost: req.body.manaCost,
    level: req.body.level,
    image: req.body.image,
    difficulty: req.body.difficulty,
    pathway: req.body.pathway
  });
  grim.save(function(err){
    if(err) return res.render('error', {message: 'Could not create grim ' + (err) });
    res.status(201).json({ grim: grim });
  });
}

function grimUpdate(req, res){
  Grim.findById(req.params.id, function(err, grim){
    if (err) return res.status(500).json({message: "Something went wrong!"});
    if (!group) return res.status(404).json({message: 'No group found.'});

    if(req.body.name) grim.name = req.body.name,
    if(req.body.incantation) grim.incantation = req.body.incantation,
    if(req.body.description) grim.description = req.body.description,
    if(req.body.manaCost) grim.manaCost = req.body.manaCost,
    if(req.body.level) grim.level = req.body.level,
    if(req.body.image) grim.image = req.body.image,
    if(req.body.difficulty) grim.difficulty = req.body.difficulty,
    if(req.body.pathway) grim.pathway = req.body.pathway
  })
}
//show all
//get
//update
//create
//delete