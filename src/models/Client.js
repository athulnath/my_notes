
var mongoose = require("mongoose");

var AppSchema = mongoose.Schema({
	userId: mongoose.Schema.ObjectId,
	app: {type: String, require: true, unique: true},
	clientId: {type: String, require: true, unique: true},
	clientSecret: {type: String, require: true, unique: true}
	redirectUri: { type: String}
});

module.exports = mongoose.model('Client', AppSchema);