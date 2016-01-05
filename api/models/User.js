var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  local: {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    isAdmin: { type: Boolean },
    characters: [{
      character: {
        character_name: { type: String },
        character_image: { type: String },
        mana: { type: Number },
        grims: [{ type: Number }],
        items: [{ type: String }],
        state: { type: String },
        isAlive: { type: Boolean }
      }
    }]
  }
});

module.exports = mongoose.model("User", userSchema);