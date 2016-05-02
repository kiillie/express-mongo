var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var influencersSchema = new Schema({name: String}, { strict: false });
var Influencers = require('../models/influencers');
router.get('/', function(req, res, next){
	fs.readFile('C:/Users/Kelly Adrian Neri/Documents/Portfolio/Applications/web-app/filter-influencers/src/files/influencers.json', function(err, data){
		if(err){
			console.log(err);
		}
		var date = new Date();
		var raw = JSON.parse(data);
		var file = {
			marketer: 1,
			influencers: raw,
			date_created: date
		}
		var influencers = new Influencers(file);

		influencers.save(function(err, data){
			if(err){
				console.log(err);
			}
			else{
				console.log("Success!");
			}
		});
	})
});

module.exports = router;