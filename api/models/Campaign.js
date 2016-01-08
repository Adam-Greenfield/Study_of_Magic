var mongoose = require("mongoose");

var campaignSchema = new mongoose.Schema({
  name: { type: String }
  //an array of users who are in charge of the campaign
  admin_users: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  //an array of all players in the campaign
  players: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
});

campaignSchema.pre("save", function(next){

  var campaign = this;

  if(campaign.isModified("players")){
    var uniquePlayers = [];
    campaign.players.forEach(function(player){
      if(uniquePlayers.indexOf(player) === -1){
        uniquePlayers.push(player);
      }
    });
    campaign.players = uniquePlayers;
  }

  if(campaign.isModified("admin_users")){
    var uniqueAdmin_userss = [];
    campaign.players.forEach(function(admin_users){
      if(uniquePlayers.indexOf(admin_users) === -1){
        uniquePlayers.push(admin_users);
      }
    });
    campaign.admin_users = uniqueAdmin_users;
  }

  next();
});

module.exports = mongoose.model("Campaign", campaignSchema);