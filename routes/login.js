var express = require('express');
var router = express.Router();
var User = require('../models/account');

router.post('/', function(req, res){
	var email = req.body.email;
	var password = req.body.password;
	// var email = "drnneri27@gmail.com";
	// var password = "kelly1234";
	User.findOne({email: email, password: password}, function(err, user){
		if(err){
			return res.send("error");
		}
		if(!user){
			return res.send("error_user");
		}
		req.session.user = user;
		res.send({message: "logged", cred: JSON.stringify(user)});
	});
});

module.exports = router;