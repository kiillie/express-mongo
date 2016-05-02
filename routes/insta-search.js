var express = require('express');
var router = express.Router();
var Instagram = require('instagram-node-lib');

Instagram.set('client_id', 'b9001567dd72449f8eadc743881c5e71');
Instagram.set('client_secret', '0866089691cf4ff2a1e0f49865b02b0e');

Instagram.set('callback_url', 'http://localhost:8081/instagram');
Instagram.set('redirect_uri', 'http://localhost:8081/');
Instagram.set('maxSockets', 10);
router.get('/', function(req, res, next){
	Instagram.users.search({ 
		q: 'kelly',
		complete: function(data){
			console.log(data);
		}
	});
});


module.exports = router;