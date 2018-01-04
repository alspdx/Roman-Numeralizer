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

romanNumerals.somethingElse = function(stringArray) {
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
