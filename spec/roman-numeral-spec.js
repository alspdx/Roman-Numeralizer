var romanNumerals = require('./../src/js/roman.js').romanNumeralsModule;

describe('the romanNumerals object and it\'s prototypes', function() {
  it('should test if any character that is not a number will not return anything', function() {
    var output = romanNumerals.romanNumeralizer("a");

    expect(output).toEqual('');

  });

  it('should test if any number higher than 3999 will return an error message', function() {
    var output = romanNumerals.romanNumeralizer(4000);

    expect(output).toEqual("There are no Roman Numerals higher than 3999, try again.");

  })

  it('should test if a single number can be converted into a Roman numeral', function() {
    var output = romanNumerals.romanNumeralizer(1);

    expect(output).toEqual("I");

  });



  it('should test if two numbers convert to a roman numeral', function() {
    var output = romanNumerals.romanNumeralizer(45);

    expect(output).toEqual("XLV");

  });

  it('should test if three numbers convert to a roman numeral', function() {
    var output = romanNumerals.romanNumeralizer(836);

    expect(output).toEqual("DCCCXXXVI");

  })

  // it('should test if four numbers 3999 or lower convert to a roman numeral', )
});
