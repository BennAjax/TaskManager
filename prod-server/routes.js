"use strict";

var _interopRequireDefault = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _taskRoutes = _interopRequireDefault(require("./api/task/task-routes"));

var _userRoutes = _interopRequireDefault(require("./api/user/user-routes"));

var _authRoutes = _interopRequireDefault(require("./api/authentication/auth-routes"));

function routes(app) {
  app.use('/api', _taskRoutes.default);
  app.use('/api', _userRoutes.default);
  app.use('/api', _authRoutes.default);
}