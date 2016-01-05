var mongoose = require "mongoose";

var grimSchema = new mongoose.schema({
  name: { type: String },
  incantation: { type: String },
  description: { type: String },
  manaCost: { type: String },
  level: { type: Number },
  image: { type: String },
  difficulty: { type: Number }
});

module.exports = mongoose.model("Grim", grimSchema);