"use strict";

var _interopRequireDefault = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.registration = registration;

var StringUtil = _interopRequireWildcard(require("../../utilities/StringUtil"));

var _userModel = _interopRequireDefault(require("../../model/user-model"));

var _authService = require("../../services/auth-service");

function login(req, res) {
  var validation = validateLogin(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      message: validation.message
    });
  }

  _userModel.default.findOne({
    username: req.body.username
  }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }

    if (!user) {
      return res.status(401).json();
    }

    var passwordMatch = _userModel.default.passwordMatches(req.body.password, user.password);

    if (!passwordMatch) {
      return res.status(401).json();
    }

    return res.status(201).json({
      token: (0, _authService.generateJWT)(user)
    });
  });
}

function registration(req, res) {
  var validation = validateRegistration(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      message: validation.message
    });
  }

  var user = new _userModel.default({
    username: req.body.username,
    password: req.body.password,
    first: req.body.first,
    last: req.body.last
  });
  user.save(function (error) {
    if (error) {
      if (error.code === 10000) {
        return res.status(403).json({
          message: 'Username already taken'
        });
      }

      return res.status(500).json();
    }

    return res.status(201).json();
  });
}

function validateRegistration(body) {
  var errors = '';

  if (StringUtil.isEmpty(body.username)) {
    errors += 'Username is Required. ';
  }

  if (StringUtil.isEmpty(body.password)) {
    errors += 'Password is Required. ';
  }

  if (StringUtil.isEmpty(body.first)) {
    errors += 'First Name is Required. ';
  }

  if (StringUtil.isEmpty(body.last)) {
    errors += 'Last Name is Required. ';
  }

  return {
    isValid: StringUtil.isEmpty(errors),
    message: errors
  };
}

function validateLogin(body) {
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