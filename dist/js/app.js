(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RomanNumerals = exports.RomanNumerals = function () {
  function RomanNumerals() {
    _classCallCheck(this, RomanNumerals);

    this.one = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    this.ten = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    this.hundred = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    this.thousand = ["", "M", "MM", "MMM"];
  }

  _createClass(RomanNumerals, [{
    key: "toInteger",
    value: function toInteger(stringArray) {
      var parsedInteger = [];
      stringArray.forEach(function (string) {
        parsedInteger.push(parseInt(string));
      });
      return parsedInteger;
    }
  }, {
    key: "converter",
    value: function converter(numArray) {
      var convertedArray = [];

      var onePositionNumber = numArray[numArray.length - 1];
      var tenPositionNumber = numArray[numArray.length - 2];
      var hundredPositionNumber = numArray[numArray.length - 3];
      var thousandPositionNumber = numArray[numArray.length - 4];

      convertedArray.unshift(this.one[onePositionNumber]);
      convertedArray.unshift(this.ten[tenPositionNumber]);
      convertedArray.unshift(this.hundred[hundredPositionNumber]);
      convertedArray.unshift(this.thousand[thousandPositionNumber]);

      return convertedArray.join("");
    }
  }, {
    key: "numberCruncher",
    value: function numberCruncher(number) {
      if (number > 3999) {
        return "There are no Roman Numerals higher than 3999, try again.";
      } else {
        return this.converter(this.toInteger(number.toString().split('')));
      }
    }
  }]);

  return RomanNumerals;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _roman = require("./../src/js/roman.js");

// User Interface Logic:
$(function () {
  $("#convert-input").submit(function (event) {
    event.preventDefault();
    var numeralizeIt = new _roman.RomanNumerals();
    var userInput = $("#number-input").val();
    var output = numeralizeIt.numberCruncher(userInput);
    $("#numeral-output").text(output);
  });
});

},{"./../src/js/roman.js":1}]},{},[2]);
