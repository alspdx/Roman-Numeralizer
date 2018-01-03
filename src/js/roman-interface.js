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
