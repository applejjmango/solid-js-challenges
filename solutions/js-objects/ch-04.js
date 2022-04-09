// Ch4 - Accessing object properties three

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
function myFunction(a, b) {
  return b in a;
}

function myFunction2(a, b) {
  return a.hasOwnProperty(b);
}

/* Test Cases
         
myFunction({a:1,b:2,c:3},'b') Expected true
myFunction({x:'a',y:'b',z:'c'},'a') Expected false
myFunction({x:'a',y:'b',z:'c'},'z') Expected true
        
*/

console.log(myFunction({ a: 1, b: 2, c: 3 }, "b"));
console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));
console.log(myFunction2({ x: "a", y: "b", z: "c" }, "a"));
