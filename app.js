var express = require("express")
  , config = require("./config/config.js")
  , bodyParser = require("body-parser")
  , DBConnector = require("./src/db/DBconnector.js")
  , oauthserver = require("oauth2-server");

var userRouter = require("./routes/userRouter.js");
var dataRouter = require("./routes/dataRouter.js");
var appsRouter = require("./routes/appsRouter.js");
var Oauth2Model = require("./src/models/Oauth2Model.js");


function App() {
	
	this.init = function() {
		 		
		var app = express();
		
		app.use(express.static("../public"));
		app.use(bodyParser.urlencoded({extended: true}));
		app.use(bodyParser.json());

		app.oauth = oauthserver({
			  model: Oauth2Model,
  			  grants: ['password'],
  			  debug: true
		});

		app.all('/oauth/token', app.oauth.grant());

		app.get('/sec', app.oauth.authorise(), function (req, res) {
  			res.send('Secret area');
		});
		
		app.use(app.oauth.errorHandler());

		DBConnector.initDB();
		
		app.use("/", [userRouter, dataRouter, appsRouter]);
		
		app.listen(config.app.port, "localhost", function() {
			console.log("application init success", config.app.host, config.app.port);
		});
	}
}

module.exports = App;