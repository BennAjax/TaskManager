"use strict";

var _interopRequireWildcard = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var controller = _interopRequireWildcard(require("./task-controller"));

var router = _express.default.Router();

router.get('/task', controller.index);
router.get('/task/:id', controller.show);
router.post('/task', controller.create);
router.put('/task:id', controller.update);
router.delete('/task:id', controller.remove);
var _default = router;
exports.default = _default;