"use strict";

var _interopRequireDefault = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateJWT = generateJWT;
exports.decodeToken = decodeToken;
exports.requireLogin = requireLogin;
exports.getUsername = getUsername;
exports.getUserId = getUserId;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function generateJWT(user) {
  var tokenData = {
    username: user.username,
    id: user._id
  };
  return _jsonwebtoken.default.sign({
    user: tokenData
  }, process.env.TOKEN_SECRET);
}

function decodeToken(req) {
  var token = req.headers.authorization || req.headers['authorization'];

  if (!token) {
    return null;
  }

  try {
    return _jsonwebtoken.default.verify(token, process.env.TOKEN_SECRET);
  } catch (e) {
    return null;
  }
}

function requireLogin(req, res, next) {
  var token = decodeToken(req);

  if (!token) {
    return res.status(401).json({
      message: 'Please Login'
    });
  }

  next();
}

function getUsername(req) {
  var token = decodeToken(req);

  if (!token) {
    return null;
  }

  return token.user.username;
}

function getUserId(req) {
  var token = decodeToken(req);

  if (!token) {
    return null;
  }

  return token.user.id;
}