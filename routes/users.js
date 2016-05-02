var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// mongoose.model('test_inserts', {name: String});
/* GET users listing. */
router.get('/', function(req, res, next) {
	mongoose.model('test_inserts').find(function(err, influencers){
  		res.send(influencers);
  	});
});

module.exports = router;
