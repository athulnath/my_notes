
var mongoose = require("mongoose");

var AppSchema = mongoose.Schema({
	userId: mongoose.Schema.ObjectId,
	app: {type: String, require: true, unique: true},
	clientID: {type: String, require: true, unique: true},
	clientKey: {type: String, require: true, unique: true},
});

module.exports = mongoose.model('Client', AppSchema);