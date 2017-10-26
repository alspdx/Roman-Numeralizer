var onePosition = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tenPostion = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];

var toInteger = function(stringArray) {
  var parsedInteger = [];
  stringArray.forEach(function(string) {
    var integer = parseInt(string);
    parsedInteger.push(integer);
  });
  return parsedInteger;
};

var romanNumeralizer = function(number) {
  var romanNumeral = [];
  var inputStringsArray = number.toString().split('');
  var inputNumbersArray = toInteger(inputStringsArray);
  
};

$(function() {
  $("#convert-input").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#number-input").val());
    var output = romanNumeralizer(userInput);
    $("#numeral-output").text(output);
  });
});
