var mongoose = require("mongoose");

var campaignSchema = new mongoose.Schema({
  name: { type: String },
  //an array of users who are in charge of the campaign
  admin_users: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  //an array of all players in the campaign
  players: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
});

campaignSchema.pre("save", function(next){

  var campaign = this;

  if(campaign.isModified("players")){
    var uniquePlayers = [];
    campaign.players.forEach(function(player){
      if(uniquePlayers.indexOf(player) === -1){
        uniquePlayers.push(player);
      }
      if(campaign.admin_users.indexOf(player) !== -1){
        var index = campaign.admin_users.indexOf(player);
        campaign.admin_users.splice(index, 1);
      }
    });
    campaign.players = uniquePlayers;
  }

  if(campaign.isModified("admin_users")){
    var uniqueAdmin_users = [];
    campaign.admin_users.forEach(function(admin_users){
      if(uniqueAdmin_users.indexOf(admin_users) === -1){
        uniqueAdmin_users.push(admin_users);
      }
      if(campaign.players.indexOf(admin_users) !== -1){
        var index = campaign.players.indexOf(admin_users);
        campaign.players.splice(index, 1);
      }
    });
    campaign.admin_users = uniqueAdmin_users;
  }

  next();
});

module.exports = mongoose.model("Campaign", campaignSchema);