// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation if they meet the prior criteria.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
*/


/* console.logs to test */
console.log("sumOfOdds");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3] 
You can assume the arrays that are being input are of the same length
*/


/* console.logs to test */
console.log("arraySubtract");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/


/* console.logs to test */
console.log("surroundArray");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/




/* console.logs to test */
console.log("longestString");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods. 
If you are unsure what that means, ask before you use a string method! (toUpperCase() and toLowerCase() should be all you need if anything)
*/

/* console.logs to test */
console.log("sToR");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/


/* console.logs to test */
console.log("divisibleBy4And7");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/


/* console.logs to test */
console.log("exclamationAndQuestion");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/


/* console.logs to test */
console.log("countAB");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function called createCharacter() that creates a character object and returns it.
A character object should consist of a name (string), an attack stat called atk (number), 
and a defense stat called def (number) that should be taken in as parameters in that order.
*/

/* console.logs to test */
console.log("createCharacter");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called pairUp() that takes in 2 character objects (an object with the following properties: 
name, atk, def where name is a string and the other two values are numbers).
For each character, add the following properties: pairUp (boolean) and set it equal to true as well 
as pairPartner (string) whose value is the name of the other opposite character.
Finally, increase the atk of the first character passed in by half the atk of the second character passed in.
*/

/* console.logs to test */
console.log("pairUp");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");



// Our code here. Don't touch!
if (typeof sumOfOdds === 'undefined') {
    sumOfOdds = undefined
  }
  
  if (typeof arraySubtract === 'undefined') {
    arraySubtract = undefined
  }
  
  if (typeof surroundArray === 'undefined') {
    surroundArray = undefined
  }
  
  if (typeof longestString === 'undefined') {
    longestString = undefined
  }
  
  if (typeof sToR === 'undefined') {
    sToR = undefined
  }
  
  if (typeof divisibleBy4And7 === 'undefined') {
    divisibleBy4And7 = undefined
  }

  if (typeof exclamationAndQuestion === 'undefined') {
    exclamationAndQuestion = undefined
  }
  
  if (typeof countAB === 'undefined') {
    countAB = undefined
  }

  if (typeof createCharacter === 'undefined') {
    createCharacter = undefined
  }

  if (typeof pairUp === 'undefined') {
    pairUp = undefined
  }
  
  module.exports = {
    sumOfOdds,
    arraySubtract,
    surroundArray,
    longestString,
    sToR,
    divisibleBy4And7,
    exclamationAndQuestion,
    countAB,
    createCharacter,
    pairUp,
  }
