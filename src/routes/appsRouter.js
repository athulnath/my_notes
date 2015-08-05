var router = require("express").Router();
var auth = require("../middlewares/auth.js");
var Client = require("../models/Client.js");
var IDGenerator = require("../util/IDGenerator.js");
var ClientManager = require("../dataManager/ClientManager.js");
var jwt = require("jsonwebtoken");
var mongoose = require("mongoose");

router.use(auth);


router.post("/api/generateapp", function(req, res) {
	
	var clientManagerObj = new ClientManager();
	var appDoc = clientManagerObj.getMyDocObj(req.body.id, req.body.appname);

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
	


router.post("/api/apps", function(req, res) {
	var userid = req.body.id;
	var clientMangerObj = new ClientManager();
	clientMangerObj.getMyApps(userid, function(err, data) {
		if(err) {
			return res.json({success: false, message: "some error occured"});
		}
		res.json({success: true, data: data});
	});
});


module.exports = router;