var App = require("../models/App.js");
var mongoose = require("mongoose");
var ObjectId = require('mongoose').Types.ObjectId; 

function AppManager() {
	this.getMyApps = function(userid, callback) {
		App.find({userId: new ObjectId(userid)}, function(err, data) {
			if(err) {
				return callback(err);
			}
			callback(null, data);
		});
	}
}

module.exports = AppManager;