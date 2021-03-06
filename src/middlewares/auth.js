
var jwt = require("jsonwebtoken")
, config = require("../../config/config.js");

module.exports = function(req, res, next) {
	var token = req.body.token || req.query.token || req.headers['x-access-token'];
	if(token) {
		jwt.verify(token, config.app.key, function(err, decoded) {
			if(err) {
				return res.json({success: false, message: "failed to authenticate auth"});
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		return res.status(403).send({
			success: true,
			message: "No token provided"
		});
	}
};