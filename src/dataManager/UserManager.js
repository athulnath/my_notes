/**
 * New node file
 */

var User = require("../models/User.js");

function UserManager() {
	
	this.get = function(username, callback) {
		User.findOne({ username: username}, function(err, user) {
			if(err) {
				return callback(err);
			}
			callback(null, user);
		});
	};
	
	this.save = function(data, callback) {
		var doc = new User(data);
		doc.save(function(err) {
			if(err) {
				return callback(err);
			}
			callback(null, true);
		});
	};
}

module.exports = UserManager;
