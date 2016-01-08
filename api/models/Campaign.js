var mongoose = require("mongoose");

var campaignSchema = new mongoose.Schema({
  name: { type: String }
  //an array of users who are in charge of the campaign
  admin_users: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  //an array of all players in the campaign
  players: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
});

module.exports = mongoose.model("Campaign", campaignSchema);