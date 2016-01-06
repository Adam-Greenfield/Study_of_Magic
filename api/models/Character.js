var mongoose = require("mongoose");

var characterSchema = new mongoose.Schema({
  character_name: { type: String },
  character_image: { type: String },
  mana: { type: Number },
  grims: [{ type: Number }],
  items: [{ type: String }],
  state: { type: String },
  isAlive: { type: Boolean },
});

module.exports = mongoose.model("Character", characterSchema);