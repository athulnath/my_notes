/**
 * New node file
 */

var router = require("express").Router();
var UserManager = require("../dataManager/UserManager.js");
var jwt = require("jsonwebtoken");
var config = require("../../config/config.js");

router.post("/user/register", function(req, res) {
	
	var data = {
	  firstname: req.body.firstname, 
	  lastname: req.body.lastname,
	  username: req.body.username,
	  password: req.body.password
	};
		  
	var userObj = new UserManager();
	
	userObj.save(data, function(err, isSave) {
		if(err) {
			return res.json({message: "error", error: err});
		} else if(!isSave) {
			return res.json({message: "error", error: "save failed"});
		}
		
		res.json({message : "user data saved!", success: true });
	});
});

router.post("/user/login", function(req, res) {	
	var username = req.body.username;
	var password = req.body.password;
	
	var userObj = new UserManager();
	userObj.get(username, function(err, user) {
		if(err) {
			return res.status(401).json({success: false, message: "error occured", error: err});
		}
		if(!user) {
			return res.status(401).json({success: false, message: "user not found"});
		}
		
		if(user.checkPassword(password)) {
			var token = jwt.sign(user, config.app.key, { expiresInMinutes: 1440});
			return res.json({success: true, message: "success", token: token, id: user._id});
			
		} else {
			return res.status(401).json({success: false, message: "password or username incorrect"});
		}

	});
});

module.exports = router;
