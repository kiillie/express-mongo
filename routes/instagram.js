var express = require('express');
var router = express.Router();
var ig = require('instagram-node').instagram();

ig.use({ access_token: '144290151.b900156.e38f4f161123408787a0cf09c8656ca6' });
ig.use({ client_id: 'b9001567dd72449f8eadc743881c5e71',
         client_secret: '0866089691cf4ff2a1e0f49865b02b0e' });
router.get('/', function(req, res, next){
	ig.user_search('kelly', function(err, users, remaining, limit){
		res.send(err);
	});
});

module.exports = router;