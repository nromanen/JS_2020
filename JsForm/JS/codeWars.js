// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect


function findNextSquare(sq) {
    if(Math.sqrt(sq)%1===0){
      return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1);
    }else{
      return -1;
    }
  }


//   Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]





// It's too hot, and they can't even…

// One hot summer day Pete and his friend Billy decided to buy watermelons. They chose the biggest crate. They rushed home, dying of thirst, and decided to divide their loot, however they faced a hard problem.

// Pete and Billy are great fans of even numbers, that's why they want to divide the number of watermelons in such a way that each of the two parts consists of an even number of watermelons. However, it is not obligatory that the parts are equal.

// Example: the boys can divide a stack of 8 watermelons into 2+6 melons, or 4+4 melons.

// The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, whether they can divide the fruits in the way they want. For sure, each of them should get a part of positive weight.

// Task

// Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.

// Examples

// divide(2) === false // 2 = 1 + 1
// divide(3) === false // 3 = 1 + 2
// divide(4) === true  // 4 = 2 + 2
// divide(5) === false // 5 = 2 + 3
// divide(6) === true  // 6 = 2 + 4


function divide(n){
    return (n % 2 == 0 && n != 2)
}



// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case


function isIsogram(str){
    let lowerWord = str.toLowerCase()
    for (let i = 0; i < lowerWord.length; i++) {
          for (let j = i; j < lowerWord.length; j++){
              if(lowerWord[i] == lowerWord[j + 1]) {
                  return false
              }
          }
      }
      return true
  }




  //You were camping with your friends far away from home, but when it's time to go back, you realize that you fuel is running out and the nearest pump is 50 miles
  // away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if 
  //it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => (fuelLeft * mpg) >= distanceToPump;


//Is the string uppercase?
// Task
// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:
// "c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

  String.prototype.isUpperCase = function() {
    return this.valueOf().toUpperCase() === this.valueOf()
  }


  // Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

  // Examples
  
  // "()"              =>  true
  // ")(()))"          =>  false
  // "("               =>  false
  // "(())((()())())"  =>  true


  function validParentheses(parens){
    let res = 0
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] == '(') {
        res += 1
      }
      if (parens[i] == ')') {
        res -= 1
      }
      if (res < 0) return false
    }
    return res == 0
  }



//   altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

//variant 1

String.prototype.toAlternatingCase = function () {
  let res = ''
  for (let i = 0; i < this.length; i++ ) {
    if (this[i] === this[i].toUpperCase()) {
      res += this[i].toLowerCase()
    } else {
      res += this[i].toUpperCase()
    } 
  }
  return res
}

//variant 2

String.prototype.toAlternatingCase = function () {
  return [...this].
    map(
       item => (item === item.toUpperCase() ? item.toLowerCase(): item.toUpperCase() )
       ).
    join('')
}



