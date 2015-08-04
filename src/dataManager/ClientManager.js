var Client = require("../models/Client.js");
var IDGenerator = require("../util/IDGenerator.js");
var mongoose = require("mongoose");
var ObjectId = require('mongoose').Types.ObjectId; 

function ClientManager() {
	this.getMyApps = function(userid, callback) {
		Client.find({userId: new ObjectId(userid)}, function(err, data) {
			if(err) {
				return callback(err);
			}
			callback(null, data);
		});
	};

	this.getMyDocObj = function(userId, appName) {
		var IdObj = new IDGenerator(userId, appName);
		return new Client({
			userId: userId,
			app: appName,
			clientId: IdObj.getClientId(),
			clientSecret: IdObj.getSecretKey()
		});
	};
}

module.exports = ClientManager;