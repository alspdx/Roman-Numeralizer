export class RomanNumerals {
  constructor() {
    this.positions = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                      ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
                      ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
                      ["", "M", "MM", "MMM"]];
  }

  toInteger(stringArray) {
    return stringArray.split("").map(Number);
  }

  converter(numArray) {
    let convertedArray = [];
    for (var i = 1; i <= numArray.length; i++) {
      const position = this.positions[i - 1];
      convertedArray.unshift(position[numArray[numArray.length - i]]);
    }
    return convertedArray.join("");
  }

  numberCruncher(number) {
    if (number > 3999) {
      return "There are no Roman Numerals higher than 3999, try again.";
    } else {
      return this.converter(this.toInteger(number));
    }
  }
}
