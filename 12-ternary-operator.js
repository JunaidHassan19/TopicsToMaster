/*
  Ternary operator = a shortcut to if{} and else{} statements
                     helps to assign a variable based on a condition
                     condition ? codeIfTrue : codeIfFalse
*/

/*
let age = 20;
let message = age >= 18 ? 'You are an adult' : 'You are a minor';

console.log(message);
*/

/*
let time = 8;
let greeting = time < 12 ? 'Good morning' : 'Good afternoon';
console.log(greeting);
*/

/*
let isStudent = true;
let message = isStudent ? 'You are a student' : 'You are not a student';
console.log(message);
*/

let purchaseAmount = 101;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is ${purchaseAmount - purchaseAmount * (discount/100)}`);