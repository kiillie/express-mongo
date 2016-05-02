var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Influencers = new Schema({
	marketer: String,
	influencers : Array
});

module.exports = mongoose.model('influencers', Influencers);