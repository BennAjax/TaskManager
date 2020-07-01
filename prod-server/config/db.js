"use strict";

var _interopRequireDefault = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connectDB;

var _mongoose = _interopRequireDefault(require("mongoose"));

function connectDB() {
  _mongoose.default.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function (error) {
    if (error) {
      console.log('Unable to connect to database');
      throw error;
    } else {
      console.log('Connected to MondoDB!');
    }
  });
}