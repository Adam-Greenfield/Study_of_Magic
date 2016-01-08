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

function campaignsCreate(req, res){
  var campaign = new Campaign({
    name: req.body.name
    //Other shit we think of
  })
}

function campaignUpdate(req, res){
  Campaign.findById(req.params.id, function(err, campaign){
    if (err) return res.status(500).json({message: "Something went wrong!"});
    if (!campaign) return res.status(404).json({message: 'No campaign found.'});

    if(req.body.name) campaign.name = req.body.name

  });
}

function campaignDelete(req, res){
  Campaign.findByIdAndRemove({_id: req.params.id}, function(err){
   if (err) return res.status(404).json({message: 'Something went wrong.'});
   res.status(200).json({message: 'Campaign has been successfully deleted'});
  });
}
