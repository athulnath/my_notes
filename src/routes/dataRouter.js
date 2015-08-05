
var router = require("express").Router();
var UserManager = require("../dataManager/UserManager.js");
var auth = require("../middlewares/auth.js");
var jwt = require("jsonwebtoken");

router.use(auth);

router.get("/api/ok", function(req, res) {
	return res.json({success: true, message:"protected resource"});
});

module.exports = router;