var mongoose = require("mongoose");

var characterSchema = new mongoose.Schema({
  character_name: { type: String },
  character_image: { type: String },
  mana: { type: Number },
  //an array of grim the character has
  grims: [{type: mongoose.Schema.ObjectId, ref: 'Grim'}],
  campaigns: [{type: mongoose.Schema.ObjectID, ref: 'Campaign'}],
  items: [{ type: String }],
  state: { type: String },
  isAlive: { type: Boolean }
});

module.exports = mongoose.model("Character", characterSchema);