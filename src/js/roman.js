export class RomanNumerals {

  constructor() {
    this.one = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    this.ten = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    this.hundred = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    this.thousand = ["", "M", "MM", "MMM"];
  }

  toInteger(stringArray) {
    var parsedInteger = [];
    stringArray.forEach(function(string) {
      var integer = parseInt(string);
      parsedInteger.push(integer);
    });
    return parsedInteger;
  }

  converter(numArray) {
    var convertedArray = [];
    var positions = ['one', 'ten', 'hundred', 'thousand'];

    var onePositionNumber = numArray[numArray.length - 1];
    var tenPositionNumber = numArray[numArray.length - 2];
    var hundredPositionNumber = numArray[numArray.length - 3];
    var thousandPositionNumber = numArray[numArray.length - 4];

    convertedArray.unshift(this.one[onePositionNumber]);
    convertedArray.unshift(this.ten[tenPositionNumber]);
    convertedArray.unshift(this.hundred[hundredPositionNumber]);
    convertedArray.unshift(this.thousand[thousandPositionNumber]);
    var convertedNumbers = convertedArray.join("");
    return convertedNumbers;
  }

  numberCruncher(number) {
    if (number > 3999) {
      return "There are no Roman Numerals higher than 3999, try again.";
    } else {
      var romanNumeral = [];
      var inputStringsArray = number.toString().split('');
      var inputNumbersArray = this.toInteger(inputStringsArray);
      var output = this.converter(inputNumbersArray);
      return output;
    }
  }
}
