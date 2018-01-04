var romanNumerals = require('./../src/js/roman.js').romanNumeralsModule;

describe('the romanNumerals object and it\'s prototypes', function() {
  var reusableOutput;

  beforeEach(function() {
    reusableOutput = romanNumerals.romanNumeralizer;
  });

  it('should test if any character that is not a number will not return anything', function() {

    expect(reusableOutput("a")).toEqual('');

  });

  it('should test if any number higher than 3999 will return an error message', function() {

    expect(reusableOutput(4000)).toEqual("There are no Roman Numerals higher than 3999, try again.");

  })

  it('should test positive for output of "I"', function() {

    expect(reusableOutput(1)).toEqual("I");

  });

  it('should test positive for output of "II"', function() {

    expect(reusableOutput(2)).toEqual("II");

  });

  it('should test positive for output of "IV"', function() {

    expect(reusableOutput(4)).toEqual("IV");

  });

  it('should test if two numbers convert to a roman numeral', function() {

    expect(reusableOutput(10)).toEqual("X");

  });

  it('should test if three numbers convert to a roman numeral', function() {

    expect(reusableOutput(836)).toEqual("DCCCXXXVI");

  });

  it('should test if four numbers 3999 or lower convert to a roman numeral', function() {

    expect(reusableOutput(3999)).toEqual("MMMCMXCIX");

  });
});
