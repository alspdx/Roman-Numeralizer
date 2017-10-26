var onePosition = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tenPosition = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var hundredPosition = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var thousandPosition = ["", "M", "MM", "MMM"];

var toInteger = function(stringArray) {
  var parsedInteger = [];
  stringArray.forEach(function(string) {
    var integer = parseInt(string);
    parsedInteger.push(integer);
  });
  return parsedInteger;
};

var converter = function(numArray) {
  var convertedArray = [];
  var onePositionNumber = numArray[numArray.length - 1];
  var tenPositionNumber = numArray[numArray.length - 2];
  var hundredPositionNumber = numArray[numArray.length - 3];
  var thousandPositionNumber = numArray[numArray.length - 4];

  convertedArray.unshift(onePosition[onePositionNumber]);
  convertedArray.unshift(tenPosition[tenPositionNumber]);
  convertedArray.unshift(hundredPosition[hundredPositionNumber]);
  convertedArray.unshift(thousandPosition[thousandPositionNumber]);
  convertedNumbers = convertedArray.join("");
  return convertedNumbers;
}

var romanNumeralizer = function(number) {
  var romanNumeral = [];
  var inputStringsArray = number.toString().split('');
  var inputNumbersArray = toInteger(inputStringsArray);
  var output = converter(inputNumbersArray);
  return output;
};

// User Interface Logic:
$(function() {
  $("#convert-input").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#number-input").val());
    var output = romanNumeralizer(userInput);
    $("#numeral-output").text(output);
  });
});
