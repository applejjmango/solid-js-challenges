// Ch9 - Sum object values

// Write a function that takes an object (a) as argument
// Return the sum of all object values
function myFunction(a) {
  return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}

function myFunction2(a) {
  let count = 0;
  const values = Object.values(a);
  for (let val of values) {
    count += val;
  }

  return count;
}

/* Test Cases
                   
myFunction({a:1,b:2,c:3}) Expected 6
myFunction({j:9,i:2,x:3,z:4}) Expected 18
myFunction({w:15,x:22,y:13}) Expected 50
    
  */

console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }));
console.log(myFunction2({ j: 9, i: 2, x: 3, z: 4 }));
