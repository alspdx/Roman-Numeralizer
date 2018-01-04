import { RomanNumerals } from './../src/js/roman.js';

// User Interface Logic:
$(function() {
  $("#convert-input").submit(function(event) {
    event.preventDefault();
    var numeralizeIt = new RomanNumerals();
    var userInput = $("#number-input").val();
    var output = numeralizeIt.numberCruncher(userInput);
    $("#numeral-output").text(output);
  });
});
