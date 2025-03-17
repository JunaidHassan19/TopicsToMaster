/*
 Variables = A Container that stores a value.
              Behaves as if it where the value it contains.

1. declaration   let x;
2. assignment    X = 100;
*/

/*
let x;
x = 100;
console.log(x);
*/

/*
let age = 20;
let price = 199.99;
let gpa = 8.5;

console.log(`Your age is ${age}`);
console.log( `The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);
*/

/*
let firstName = 'Yoo';
let email = 'yoo@gmail.com'

console.log(typeof firstName);
console.log(firstName);
console.log(`Hey ${firstName}`);
console.log(`${firstName} email is ${email}`)
*/

/*
let online = false;
let forSale = true;
let isStudent = true;

console.log(typeof online);
console.log(`Yoo is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);
*/

let fullName = 'Yoo code';
let age = 20;
let isStudent = true;

document.getElementById('p1').textContent = `Your name is ${fullName}`;
document.getElementById('p2').textContent = `You are ${age} years old`;
document.getElementById('p3').textContent = `Enrolled: ${isStudent}`;