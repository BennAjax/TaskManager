"use strict";

var _interopRequireDefault = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var router = _express.default.Router();

router.get("/task", function (req, res) {
  res.send("get task");
});
router.get("/task/:id", function (req, res) {});
router.post("/task", function (req, res) {});
router.put("/task:id", function (req, res) {});
router.delete("/task:id", function (req, res) {});
var _default = router;
exports.default = _default;