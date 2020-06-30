"use strict";

var _interopRequireDefault = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _env = _interopRequireDefault(require("./config/env"));

var _db = _interopRequireDefault(require("./config/db"));

var app = (0, _express.default)();
var port = 3000;
(0, _env.default)(app);
(0, _db.default)();
(0, _routes.default)(app);
app.get('/', function (req, res) {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running Server in Development Mode');
  } else {
    return res.sendFile('index.html', {
      root: __dirname + '/../dist'
    });
  }
});
app.listen(port, function () {
  return console.log("MEVN app listening at http://localhost:".concat(port, " in ").concat(process.env.NODE_ENV, " mode!"));
});