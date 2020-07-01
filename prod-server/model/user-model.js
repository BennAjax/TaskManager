"use strict";

var _interopRequireDefault = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _StringUtil = _interopRequireDefault(require("../utilities/StringUtil"));

var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));

var userSchema = new _mongoose.default.Schema({
  username: String,
  first: String,
  last: String,
  password: String
});
userSchema.set('timestamps', true);
userSchema.virtual('fullName').get(function () {
  var first = _StringUtil.default.capitalize(this.first.tolowerCase());

  var last = _StringUtil.default.capitalize(this.last.tolowerCase());

  return "".concat(first, " ").concat(last);
});

userSchema.statics.passwordMatches = function (password, hash) {
  return _bcryptNodejs.default.compareSync(password, hash);
};

userSchema.pre('save', function (next) {
  this.username = this.username.toLowerCase();
  this.first = this.first.toLowerCase();
  this.last = this.last.toLowerCase();
  var unsafePassword = this.password;
  this.password = _bcryptNodejs.default.hashSync(unsafePassword);
  next();
});

var _default = _mongoose.default.model('user', userSchema);

exports.default = _default;