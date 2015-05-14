/**
 * New node file
 */


var mongoose = require("mongoose")
  , md5 = require("../util/md5.js");


var UserSchema = new mongoose.Schema({
	firstname: { type: String, required: true},
	lastname: { type: String, required: true},
	username: { type: String, required: true, unique: true },
	hashedPassword: { type: String, required: true}
});

UserSchema.virtual("userId").get(function() {
	return this.id;
});

UserSchema.virtual("password")
.set(function(password) {
	this._plainPasword = password;
	this.hashedPassword = md5(password);
})
.get(function() {
	return this._plainPassword;
});

UserSchema.methods.checkPassword = function(password) {
	return md5(password) === this.hashedPassword;
}; 

module.exports = mongoose.model("Users", UserSchema);
