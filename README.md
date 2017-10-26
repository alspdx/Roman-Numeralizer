# Roman Numeralizer

#### _An app to Roman Numeralize-It!_

#### By **Grant Rotzien** and **Adam Smith**, 2017

## Description

The Roman Numeralizer is an app that will take in user input in the form of a number and return a roman numeral value. The following specifications will apply to the Roman Numeralizer:

** Accepts numbers no higher than 3999 **
  * Input: 4000
  * Output: Form validation fails, no output

** Converts single digit numbers into Roman Numeral characters **
  * Input: 6
  * Output: VI

** Converts two digit numbers into Roman Numeral characters **
  * Input: 50
  * Output: L

** Converts three digit numbers into Roman Numeral characters **
  * Input: 500
  * Output: D

** Converts four digit numbers into Roman Numeral characters **
  * Input: 1000
  * Output: M

** Processes numbers separately from the one, ten, hundred, and thousand position **
  * Input: 2115
  * Output: ["MM", "C", "X", "V"]

** Concatenates output into a single string value **
  * Input: 2115
  * Output: "MMCXV"

** No more than three of the same Roman Numeral character in a row **
  * Input: 9
  * Output: IX
  
