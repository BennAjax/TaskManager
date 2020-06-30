"use strict";

var _interopRequireWildcard = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.registration = registration;

var StringUtil = _interopRequireWildcard(require("../../utilities/StringUtil"));

function login(req, res) {
  var validation = validateRegistration(req.body);

  if (!validation.isValid) {
    return res.json({
      message: validation.message
    });
  }

  return res.json();
}

function registration(req, res) {
  var validation = validateRegistration(req.body);

  if (!validation.isValid) {
    return res.json({
      message: validation.message
    });
  }

  var user = {
    username: req.body.username.toLowerCase(),
    password: req.body.password
  };
  console.log(user);
  return res.json();
}

function validateRegistration(body) {
  var errors = '';

  if (StringUtil.isEmpty(body.username)) {
    errors += 'Username is Required. ';
  }

  if (StringUtil.isEmpty(body.password)) {
    errors += 'Password is Required. ';
  }

  return {
    isValid: StringUtil.isEmpty(errors),
    message: errors
  };
}