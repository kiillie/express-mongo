var express = require('express');
var router = express.Router();
var  FacebookSearch = require('facebook-search');
var app = express();

var fb = new FacebookSearch('1714347685446820', 'bdf634f0623559f419d6ebc4be9d3a4d', 'EAAYXMKzQBKQBAMc6ZBO97fpB6GKW4dgo7ra7tzjEvaKYXmTZBWw8U8xPlxaEVuM31ImNSRBsHMnmKTIimEmZCqTDzwIVoc2umO1GqogWhQy8JXKjn5UYYpsh5E7wA3Phiz1trt8vnm6dqvuaI0TEk3xHFGCO5EvjT37ho6LiQZDZD');

var searchFor = {
	type: 'user',
	q: 'kelly'
};

router.get('/', function(req, res, next){
	fb.search(searchFor, function(err, res){
		console.log(err ? err : res);

		fb.next(function(err, res){
			console.log(err ? err : res);
		});
	});
})

module.exports = router;