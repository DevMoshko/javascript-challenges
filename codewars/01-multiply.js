// Multiply

// This code does not work. Fix it.
function multiply(a, b) {
  a * b;
}

// My Solution:
// It is simply missing the return keyword
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 3));

// As a single line arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 2));
