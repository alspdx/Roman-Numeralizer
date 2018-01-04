(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var romanNumerals = {
  onePosition: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  tenPosition: ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  hundredPosition: ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  thousandPosition: ["", "M", "MM", "MMM"]
};

romanNumerals.toInteger = function(stringArray) {
  var parsedInteger = [];
  stringArray.forEach(function(string) {
    var integer = parseInt(string);
    parsedInteger.push(integer);
  });
  return parsedInteger;
};

romanNumerals.converter = function(numArray) {
  var convertedArray = [];
  var onePositionNumber = numArray[numArray.length - 1];
  var tenPositionNumber = numArray[numArray.length - 2];
  var hundredPositionNumber = numArray[numArray.length - 3];
  var thousandPositionNumber = numArray[numArray.length - 4];

  convertedArray.unshift(romanNumerals.onePosition[onePositionNumber]);
  convertedArray.unshift(romanNumerals.tenPosition[tenPositionNumber]);
  convertedArray.unshift(romanNumerals.hundredPosition[hundredPositionNumber]);
  convertedArray.unshift(romanNumerals.thousandPosition[thousandPositionNumber]);
  convertedNumbers = convertedArray.join("");
  return convertedNumbers;
};

romanNumerals.romanNumeralizer = function(number) {
  if (number > 3999) {
    return "There are no Roman Numerals higher than 3999, try again."
  } else {
    var romanNumeral = [];
    var inputStringsArray = number.toString().split('');
    var inputNumbersArray = romanNumerals.toInteger(inputStringsArray);
    var output = romanNumerals.converter(inputNumbersArray);
    return output;
  }
};

exports.romanNumeralsModule = romanNumerals;

},{}],2:[function(require,module,exports){
var romanNumerals = require('./../src/js/roman.js').romanNumeralsModule;

// User Interface Logic:
$(function() {
  $("#convert-input").submit(function(event) {
    event.preventDefault();
    var userInput = $("#number-input").val();
    var output = romanNumerals.romanNumeralizer(userInput);
    $("#numeral-output").text(output);
  });
});

},{"./../src/js/roman.js":1}]},{},[2]);
