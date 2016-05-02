var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jquery = require('jquery');
var Schema = mongoose.Schema;
var pokeSchema = new Schema({name: String}, { strict: false });
var Pokemon = mongoose.model('test_inserts', pokeSchema);
router.post('/', function(req, res, next){
	var insert = JSON.stringify(req.body, null, 2);
	//console.log(insert);
	var pokemon = new Pokemon(JSON.parse(insert));
	
	pokemon.save(function(err, data){
		if(err){
			console.log(err);
		}
		else{
			console.log("Success!");
		}
	});
})

module.exports = router;
