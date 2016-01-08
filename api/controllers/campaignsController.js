var Campaign = require('../models/Campaign.js');

function campaignIndex(req, res){
  Campaign.find(function(err, campaigns){
    if (err) return res.status(404).json({message: 'Something went wrong and we could not pull the campaigns.'});
    res.status(200).json({ campaigns: campaigns });
  });
};

function campaignShow(req, res){
  Campaign.findById(req.params.id, function(err, campaign){
    if (err) return res.status(404).json({message: 'Something went wrong and we could not find the campaign.'});
    res.status(200).json({ campaign: campaign });
  });
};

