"use strict";

var _interopRequireWildcard = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var controller = _interopRequireWildcard(require("./auth-controller"));

var router = _express.default.Router();

router.post('/login', controller.login);
router.post('/register', controller.registration);
var _default = router;
exports.default = _default;