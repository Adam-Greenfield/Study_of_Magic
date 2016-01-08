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

function characterCreate(req, res){
  var character = new Character({
    character_name: req.body.character_name,
    character_image: req.body.character_image
  })
}

function characterUpdate(req, res){
  Character.findById(req.params.id, function(character){
    if (err) return res.status(500).json({message: "Something went wrong!"});
    if (!character) return res.status(404).json({message: 'No character found.'});
    if (req.body.character_name) character.character_name = req.body.character_name;
    if (req.body.character_image) character.character_image = req.body.character_image;
    if (req.body.mana) character.mana = req.body.mana;
    if (req.body.grims) character.grims = req.body.grims;
    if (req.body.campaigns) character.campaigns = req.body.campaigns;
    if (req.body.items) character.items = req.body.items;
    if (req.body.state) character.state = req.body.state;
    if (req.body.isAlive) character.isAlive = req.body.isAlive;
  });

}

function characterDelete(req, res){
  Character.findByIdAndRemove({_id: req.params.id}, function(err){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json({message: 'Character has been successfully deleted'});
  });
}