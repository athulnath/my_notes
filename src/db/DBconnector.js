/**
 * New node file
 */

var mongoose = require("mongoose")
  , util = require("util")
  , config = require("./../../config/config.js");



function DBConnector() {
	
}

DBConnector.initDB = function() {
	var url = util.format("mongodb://%s:%d/%s", config.database.host, config.database.port, config.database.db); 
	mongoose.connect(url);
}

module.exports = DBConnector;

