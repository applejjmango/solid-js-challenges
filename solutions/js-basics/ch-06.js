// Ch-6 - Get last n characters of string

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

function myFunction(str) {
  return str.slice(-3);
}

function myFunction2(str) {
  return str.slice(str.length - 3, str.length);
}

/*

myFunction('abcdefg') Expected 'efg'
myFunction('1234') Expected '234'
myFunction('fgedcba') Expected 'cba'

*/

console.log(myFunction("fgedcba"));
