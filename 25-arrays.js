/*
  Array = a variable like structure that can hold more than 1 value
*/

/*
let fruits = ['Apple', 'orange', 'banana'];

// console.log(fruits);
console.log(fruits[0]); // Apple
console.log(fruits[1]); // orange
console.log(fruits[2]); // banana
console.log(fruits[3]); // undefined
console.log(fruits);

// fruits[1] = 'coconut'
// console.log(fruits);


//-- add an element --
fruits.push('coconut');
console.log(fruits);


// pop 
fruits.pop();
console.log(fruits);

// unshift
fruits.unshift('mango');
console.log(fruits);

// shift
fruits.shift();
console.log(fruits);
*/

/*
let fruits = ['Apple', 'orange', 'banana'];


let numOfFruits = fruits.length;

console.log(numOfFruits);
*/

let fruits = ['Apple', 'orange', 'banana', 'coconut'];

/*
for(let i = 0; i < fruits.length; i ++)  {
  console.log(fruits[i]);
}
*/
// shortcut display of elements

for(let fruit of fruits) {
  console.log(fruits);
}