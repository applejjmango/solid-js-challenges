// Ch-10 Return the percentage of a number

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

function myFunction(a, b) {
  return (b / 100) * a;
}

// or

function myFunction2(a, b) {
  return (a * b) / 100;
}

/*

myFunction(100,50) Expected 50
myFunction(10,1) Expected 0.1
myFunction(500,25) Expected 125

*/
console.log(myFunction(500, 25));
