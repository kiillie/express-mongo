var express = require('express');
var router = express.Router();
var Twit = require('twit');
var User = require('../models/account');
var session = require('express-session');
var T = new Twit({
	consumer_key: 'PE4Lcb2pQvfaCKUrrRlouZS4R',
	consumer_secret: 'tpo9wKCvzhWJy4mHjobJBLRkgYbHMA4jcnJnKwsQrNJROllthF',
	access_token: '2362872974-clmIP0F5B8CSV1tiiYyVyu396UZ4RAnZc4ULjTK',
	access_token_secret: 'XBat0wD5T9kxsUh9xH714dFyWEVMxMiuba2LpPky3gxN0'
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/twitter/:search', function(req, res, next){
	T.get('users/search', { q: req.params.search, count: 100 }, function(err, data, response) {
	  res.send(data);
	})
});

router.get('/logout', function(req, res){
	req.session.destroy();
	return res.status(200).send("You are now logged out!");
})

router.get('/dashboard', function(req, res){
	if(!req.session.user){
		return res.status(401).send();
	}

	return res.status(200).send('Welcome to super-secret API');
});

router.get('/register', function(req, res){
	var email = "drnneri27@gmail.com";
	var password = "kelly1234";
	var firstname = "Kelly Adrian";
	var lastname = "Neri";

	var newuser = new User();
	newuser.email = email;
	newuser.password = password;
	newuser.firstname = firstname;
	newuser.lastname = lastname;

	newuser.save(function(err, savedUser){
		if(err){
			return res.status(500).send();
		}

		return res.status(200).send();
	});
})
module.exports = router;
