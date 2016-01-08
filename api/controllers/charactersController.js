var Character = require('../models/Character.js');

function characterIndex(req, res){
  Character.find(function(err, characters){
    if (err) return res.status(404).json({message: 'Something went wrong and we could not pull the characters.'});
    res.status(200).json({ characters: characters });
  });
};

function characterShow(req, res){
  Character.findById(req.params.id, function(err, character){
    if (err) return res.status(404).json({message: 'Something went wrong and we could not find the character.'});
    res.status(200).json({ character: character });
  });
};

