var mongoose = require("mongoose");

var grimSchema = new mongoose.Schema({
  name: { type: String },
  incantation: { type: String },
  description: { type: String },
  manaCost: { type: String },
  level: { type: Number },
  image: { type: String },
  difficulty: { type: Number },
  pathway: { type: String }
});

module.exports = mongoose.model("Grim", grimSchema);