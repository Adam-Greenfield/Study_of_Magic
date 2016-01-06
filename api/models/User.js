var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  local: {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    isAdmin: { type: Boolean },
    characters: [{ type: mongoose.Schema.ObjectId, ref: "Character" }]
  }
});

module.exports = mongoose.model("User", userSchema);