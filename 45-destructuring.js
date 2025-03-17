/*

Destructuring = Destructuring in JavaScript is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables. This makes it easier to extract data and improves code readability.

            = extract values from arrays and objects, then assign them to variables in a convenient way.
            [] = to perform array destructuring
            {} = to perform object destructuring

*/

/*
// Example 1 --- SWAP THE VALUES OF TWO VARIABLES 

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
*/
/*
// Example 2 --- SWAP 2 ELEMENTS IN AN ARRAY

const colors = ['red', 'blue', 'green', 'yellow'];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors); // ['yellow', 'blue', 'green', 'red']
*/
/*
// Example 3 --- ASSIGN ARRAY TO VARIABLES

const animals = ['🐶', '🐱', '🐭', '🐹'];

const [dog, cat, ...extraAnimals] = animals;

console.log(dog); // 🐶
console.log(cat); // 🐱
console.log(extraAnimals); // ['🐭', '🐹']
*/
/*
// Example 4 --- EXTRACT VALUES FROM OBJECTS

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  job: 'Fry Cook',
}

const person2 = {
  firstName: 'sara',
  lastName: 'doe',
  age: 20,
}

const {firstName, lastName, age, job =  'Unemployed'} = person2;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(age); // 30
console.log(job); // Fry Cook
*/

// Example 5 --- DESTRUCTURE IN FUNCTION PARAMETERS

function desplayPerson({firstName, lastName, age, job = 'Unemployed'}) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  job: 'Fry Cook',
}

const person2 = {
  firstName: 'sara',
  lastName: 'doe',
  age: 20,
}

desplayPerson(person2);