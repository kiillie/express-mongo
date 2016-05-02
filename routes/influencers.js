var express = require('express');
var router = express.Router();
var User = require('../models/influencers');

router.get('/', function(req, res){
	User.find({marketer: req.session.user._id}, function(err, result){
		if(err){
			return res.send("error");
		}
		if(!result){
			return res.send("error_result");
		}
		res.send(result);
	});
});

module.exports = router;