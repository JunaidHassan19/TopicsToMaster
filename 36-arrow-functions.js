/*
  arrow functions = shorthand syntax for writing functions.
                  = a concise way to write function expressions.
                  good for simple functions that you use only once.
                  (parametres) => {code block}
*/
/*
// regular function

const sayHello = function() {
  console.log('Hello');
}

sayHello();

// arrow function

const sayHello2 = () => {
  console.log('Hello');
}

sayHello2();
*/

/*
// One line arrow functions do not need braces

const sayHello = () => console.log('Hello');
sayHello();

const hello = (name) => console.log(`Hello ${name}`);

hello('junni'); // Hello junni
*/
/*
const hello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

hello('junni', 'junni'); // Hello junni junni
*/
/*
setTimeout(hello, 3000);

function hello() {
  console.log('Hello');
}

setTimeout(function() {
  console.log('Hello')
}, 3000);

setTimeout( () => console.log('Hello'), 3000);
*/

const numbers = [1, 2, 3, 4, 5];

const square = numbers.map( (element) => Math.pow(element, 2) );
const cube = numbers.map( (element) => Math.pow(element, 3));
const evenNums = numbers.filter( (Element) => Element % 2 === 0);
const oddNums = numbers.filter( (Element) => Element % 2 !== 0);
const total = numbers.reduce( (accumuliter, element) => accumuliter + element);

console.log(square); // [ 1, 4, 9, 16, 25 ]
console.log(cube); // [ 1, 8, 27, 64, 125 ]
console.log(evenNums); // [ 2, 4 ]
console.log(oddNums); // [ 1, 3, 5 ]
console.log(total); // 15