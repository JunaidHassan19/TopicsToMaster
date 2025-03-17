/*

Arrays of objects are a common way to group objects. Here’s an example of an array of objects: 

*/

const fruits = [
  {name: 'apple', color: 'red', calories: 110},
  {name: 'pear', color: 'green', calories: 80}, 
  {name: 'banana', color: 'yellow', calories: 180}, 
  {name: 'kiwi', color: 'brown', calories: 50},
  {name: 'orange', color: 'orange', calories: 120}
];

// console.log(fruits[4].calories);
// fruits.push({name: 'grape', color: 'purple', calories: 80});
// fruits.pop();
// fruits.splice(1, 2);

// console.log(fruits);
/*
// ------- forEach() -------

fruits.forEach(fruit => {
  // console.log(fruit.name)
  // console.log(fruit.color)
  console.log(fruit.calories)
});
*/

/*
// ------- map() -------
//     The map() method creates a new array populated
//     with the results of calling a provided function 
//    on every element in the calling array.

const fruitNames = fruits.map(fruit => {
  return fruit.name;
});
const fruitColors = fruits.map(fruit => {
  return fruit.color;
});
const fruitCalories = fruits.map(fruit => {
  return fruit.calories;
});


console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);
*/

/*
// ------- filter() -------
//       The filter() method creates a new array
//       populated with the elements
//       that pass the test implemented 
//       by the provided function.
const highCalories = fruits.filter(fruit => {
  return fruit.calories > 100;
});
const lowCalories = fruits.filter(fruit => {
  return fruit.calories < 100;
});

console.log(highCalories);
console.log(lowCalories);
*/

//----------------- reduce() -----------------
/*
The reduce() method executes a reducer function on each element of the array, resulting in a single value.
It takes two parameters in the callback:
  - accumulator: accumulates the callback's return values.
  - currentValue: the current element being processed.
Optionally, an initial value can be provided.
In this code, reduce() is used to find the fruit with the maximum or minimum calories.
*/

const  maxFruit = fruits.reduce((max, fruit) => {
   return (fruit.calories > max.calories) ? fruit : max;
});

const  minFruit = fruits.reduce((min, fruit) => {
   return (fruit.calories < min.calories) ? fruit : min;
});

console.log(maxFruit);
console.log(minFruit);
