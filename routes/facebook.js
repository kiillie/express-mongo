var express = require('express');
var router = express.Router();
var FB = require('facebook-node');
FB.setApiVersion('v2.5');
var  FacebookSearch = require('facebook-search');
router.get('/', function(req, res, next){
	FB.setAccessToken('EAAYXMKzQBKQBAHmxYmeEm8bjmrYOBO9DPgbccaF6is5h8Fut6KjLNmMXzJNNr4T7wXYJAAKGj4swFmWXiZC7Gem3AH6xbFbkHnxsd7kCsabtr3SZC2KBWESyrM3P692Udxy9S4NxozCPJ35lT87O30op0GFwcOHCz4NXJVKwZDZD');
	FB.api({ method: 'users.getInfo', uids: ['4'], fields: ['uid', 'name'] }, function (res) {
	    if(!res || res.error_msg) {
	        console.log(!res ? 'error occurred' : res.error_msg);
	        return;
	    }
	 
	    console.log('User Id: ' + res[0].uid);
	    console.log('Name: ' + res[0].name);
	});
});

module.exports = router;