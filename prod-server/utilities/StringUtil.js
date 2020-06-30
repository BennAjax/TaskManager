"use strict";

require("core-js/modules/es.string.trim");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = isEmpty;
exports.capitalize = capitalize;

function isEmpty(value) {
  return !value || !value.trim();
}

function capitalize(value) {
  return value.charAt(0).toUpperCase();
}