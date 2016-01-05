var mongoose = require "mongoose";

var userSchema = new mongoose.schema({
  local: {
    username: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean },
    character: {
      character_name: { type: String },
      character_image: { type: String },
      mana: { type: Number },
      grimoires: {[ type: Number ]},
      items: {[ type: String ]},
      state: { type: String },
      isAlive: { type: Boolean }
    }
  }
})

module.exports = mongoose.model("User", userSchema);