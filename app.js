var express = require("express")
  , config = require("./config/config.js");

function App() {
	this.init = function() {
		var app = express();
		
		app.use(express.static("../public"));
		
		app.listen(config.app.port, config.app.host, function() {
			console.log("application init success", config.app.host, config.app.port);
		});
	}
}

module.exports = App;