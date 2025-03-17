/*

function decoration = define a reusable block of code that performs a specific task.
*/
// function sayHello() {
//     console.log("Hello");
// }


/*
Function Expressions = A function expression is a function that is assigned to a variable. The variable can be used as a function..
                  
                     = a way to define a function using an expression

                      = A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses () 
*/

// setTimeout(sayHello, 3000); // 3 seconds
setTimeout(function() {
  console.log("Hello");
}, 3000); // 3 seconds

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const squares = numbers.map(square);
const squares =  numbers.map(function(element) {
  return Math.pow(element, 2);
});

// const cubes = numbers.map(cube);
const cubes = numbers.map(function(element) {
  return Math.pow(element, 3);
});


console.log(squares);
console.log(cubes);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(function(element) {
  return element % 2 === 0;
});

console.log(evenNumbers);

const oddNumbers = numbers.filter(function(element) {
  return element % 2 !== 0;
});

console.log(oddNumbers);

const total = numbers.reduce(function(accumulator, element) {
  return accumulator + element;
}, 0);

console.log(total);
