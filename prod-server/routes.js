"use strict";

var _interopRequireDefault = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _task = _interopRequireDefault(require("./api/task"));

var _user = _interopRequireDefault(require("./api/user"));

var _authentication = _interopRequireDefault(require("./api/authentication"));

function routes(app) {
  app.use('/api', _task.default);
  app.use('/api', _user.default);
  app.use('/api', _authentication.default);
}