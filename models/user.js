var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	mail: String,
	password: String
});

module.exports = mongoose.model(userSchema,'users');