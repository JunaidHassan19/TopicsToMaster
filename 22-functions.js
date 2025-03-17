/*
 Function = A section of reusable code. Declare code once,
           use it whenever you want. Call the function to execute that code
*/

/*
function Hi(userName) {
  console.log('Hello Coder');
  console.log(`Hello ${userName}`);
}

Hi('junni');
Hi('junni');
Hi('junni');
Hi('junni');
*/

/*
//-- Add two numbers ---

function add(x, y) {
  // let result = x + y;
  // return result; 
  return x + y;
}

// let answer = add(2, 3);
// console.log(answer);
console.log(add(2, 3));
*/

/*
// --- Subtract ---
function subtract(x, y) {
  let answer = x - y;
  return answer;
}
console.log(subtract(5, 2));
*/

/*
// --- Multiply ---
function multiply(x, y) {
  let result = x * y;
  return result;
}
console.log(multiply(5, 2));
*/

/*
// --- Divide ---
function divide(x, y) {
  let result = x / y;
  return result;
}
console.log(divide(5, 2));
*/

/*
// --- To determine Even OR odd

function isEven(num) {
  // if(num % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return num % 2 === 0 ? true :false; // Ternary operator
}
console.log(isEven(12));
*/

// --- Valid Email ---

function isValidEmail(email) {
  // if(email.includes('@')) {
  //   return true;
  // }
  // else{
  //   return false;
  // }
  return email.includes('@') ? true :false; // Ternary operator
}
console.log(isValidEmail('hello@.com'))
console.log(isValidEmail('hello.com'))