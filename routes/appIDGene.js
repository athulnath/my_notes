var router = require("express").Router();
var auth = require("../src/middlewares/auth.js");
var App = require("../src/models/App.js");
var IDGenerator = require("../src/util/IDGenerator.js");
var jwt = require("jsonwebtoken");
var mongoose = require("mongoose");

router.use(auth);

router.post("/api/generateapp", function(req, res) {
	
	var appname = req.body.appname;
	var userId = req.body.id;
	var IdObj = new IDGenerator(userId, appname);
	
	var appDoc = new App({
		userId: userId,
		app: appname,
		clientID: IdObj.getClientId(),
		clientKey: IdObj.getSecretKey()
	});
	
	appDoc.save(function(err, appDoc) {
		
		if(err) {
			if(err.code == 11000) {
				return res.json({sucess: false, message: "duplicate application name", error: err}); 
			}
			return res.json({sucess: false, message: "save failed", error: err}); 
		}
		
		return res.json({success: true, message: "application added", data: appDoc});
	});
	
});

module.exports = router;