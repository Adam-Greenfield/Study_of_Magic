var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var userSchema = new mongoose.Schema({
  local: {
    email: { type: String, unique: true },
    password: { type: String },
    name: { type: String },
    isAdmin: { type: Boolean },
    characters: [{ type: mongoose.Schema.ObjectId, ref: "Character" }],
    campaigns: [{ type: mongoose.Schema.ObjectId, ref: "Campaign" }]
  }
});

userSchema.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(6), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model("User", userSchema);