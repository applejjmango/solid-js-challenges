// Ch-4 - Get nth character of string

function myFunction(a, n) {
  return a[n - 1];
}

/* Test Cases

myFunction('abcd',1) Expected 'a'
myFunction('zyxbwpl',5) Expected 'w'
myFunction('gfedcba',3) Expected 'e'

*/

console.log(myFunction("gfedcba", 3));
