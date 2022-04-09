// Ch13 - Split a number into its digits

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(a) {
  const string = a + "";
  const strings = string.split("");
  return strings.map((digit) => Number(digit));
}

function myFunction2(a) {
  return [...(a + "")].map((v) => +v);
}

/*

myFunction(10) Expected [1,0]
myFunction(931) Expected [9,3,1]
myFunction(193278) Expected [1,9,3,2,7,8]

*/

console.log(myFunction(931));
console.log(myFunction2(193278));
