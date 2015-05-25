/**
 * New node file
 */

var router = require("express").Router();
var UserManager = require("../src/dataManager/UserManager.js");
var jwt = require("jsonwebtoken");
var config = require("../config/config.js");

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
			return res.json({message: "error occured", error: err});
		}
		if(!user) {
			return res.json({message: "user not found"});
		}
		
		if(user.checkPassword(password)) {
			var token = jwt.sign(user, config.app.key, { expiresInMinutes: 1440});
			return res.json({message: "success", token: token});
			
		} else {
			return res.json({message: "failed"});
		}

	});
});

module.exports = router;
