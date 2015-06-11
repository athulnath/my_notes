
var crypto = require("crypto");

function IDGenerator(clientId, name) {
	
	var clientID = clientId;
	var name = name;
	
	function getRandomInt(count) {
		var str = "5000";
		for(var i = 0; i < count; i++) {
			str += parseInt(Math.random() * 10 + 1);
		}
		return str;
	}
	
	this.getClientId = function() {
		var dateObj = new Date();
		return getRandomInt(3) + dateObj.getTime();
		
	}
	
	this.getSecretKey = function() {
		return crypto.createHash('sha1').update(clientId + name + new Date() + getRandomInt(3)).digest('hex');
	}
}

module.exports = IDGenerator;