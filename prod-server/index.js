"use strict";

var _interopRequireDefault = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var app = (0, _express.default)();
var port = 3000;
(0, _routes.default)(app);
app.get("/", function (req, res) {
  return res.send("Hello World!");
});
app.listen(port, function () {
  return console.log("MEVN app listening at http://localhost:".concat(port));
});