var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Account = new Schema({
	email: {type: String, unique: true},
	password: String,
	firstname: String,
	lastname: String
});


module.exports = mongoose.model('marketers', Account);