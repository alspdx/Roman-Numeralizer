export class RomanNumerals {

  constructor() {
    this.one = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    this.ten = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    this.hundred = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    this.thousand = ["", "M", "MM", "MMM"];
  }

  toInteger(stringArray) {
    let parsedInteger = [];
    stringArray.forEach(function(string) {
      parsedInteger.push(parseInt(string));
    });
    return parsedInteger;
  }

  converter(numArray) {
    let convertedArray = [];

    const onePositionNumber = numArray[numArray.length - 1];
    const tenPositionNumber = numArray[numArray.length - 2];
    const hundredPositionNumber = numArray[numArray.length - 3];
    const thousandPositionNumber = numArray[numArray.length - 4];

    convertedArray.unshift(this.one[onePositionNumber]);
    convertedArray.unshift(this.ten[tenPositionNumber]);
    convertedArray.unshift(this.hundred[hundredPositionNumber]);
    convertedArray.unshift(this.thousand[thousandPositionNumber]);
    
    return convertedArray.join("");
  }

  numberCruncher(number) {
    if (number > 3999) {
      return "There are no Roman Numerals higher than 3999, try again.";
    } else {
      return this.converter(this.toInteger(number.toString().split('')));
    }
  }
}
