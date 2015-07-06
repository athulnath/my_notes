var express = require("express")
  , config = require("./config/config.js")
  , bodyParser = require("body-parser")
  , DBConnector = require("./src/db/DBconnector.js");

var userRouter = require("./routes/userRouter.js");
var dataRouter = require("./routes/dataRouter.js");
var appsRouter = require("./routes/appsRouter.js");

function App() {
	
	this.init = function() {
		 		
		var app = express();
		
		app.use(express.static("../public"));
		app.use(bodyParser.urlencoded({extended: true}));
		app.use(bodyParser.json());
		
		DBConnector.initDB();
		
		
		app.use("/", [userRouter, dataRouter, appsRouter]);
		
		app.listen(config.app.port, "localhost", function() {
			console.log("application init success", config.app.host, config.app.port);
		});
	}
}

module.exports = App;