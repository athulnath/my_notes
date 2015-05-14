/**
 * New node file
 */

var router = require("express").Router();
var UserManager = require("../src/dataManager/UserManager.js");

router.get("/user/id/:username", function(req, res) {
	
	var username = req.params.username;
	
	var userObj = new UserManager();
	userObj.get(username, function(err, userdata) {
		if(err) {
			return res.json({message: "error", error: err});
		}
		
		res.json(userdata);
	});
});

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

module.exports = router;
