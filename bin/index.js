var App = require("../app.js");

GLOBAL.APP = {};

GLOBAL.APP.ROOT = __dirname + "/src";

(new App()).init();