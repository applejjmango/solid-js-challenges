function myFunction(a, b) {
  return a === b;
}

function myFunction(a, b) {
  return a === b ? true : false;
}

/* Test Cases

myFunction(2, 3) Expected false 
myFunction(3, 3) Expected true 
myFunction(1, '1') Expected false 
myFunction('10', '10') Expected true 

*/

console.log(myFunction("10", "10"));
