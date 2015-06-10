var router = require("express").Router();
var auth = require("../src/middlewares/auth.js");
var jwt = require("jsonwebtoken");

router.use(auth);

router.get("/api/generateapp", function(req, res) {
	
});

module.exports = router;