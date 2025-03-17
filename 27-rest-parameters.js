/*

Rest Parameters = (...rest) allows a function to work with a variable number of arguments
                  by bundling them into an array.
                  
                  spread = expands an array into a list of arguments
                  rest = bundles seperate elements into an array
                  syntax = function(a, b, ...rest) { ... }

*/

/*
// example 1, rest parameters
function foodList(...foods) {
  console.log(foods);
}

function getFood(...foods) {
  return foods;
}

const food1 = 'pizza';
const food2 = 'burger';
const food3 = 'pasta';
const food4 = 'fries';
const food5 = 'salad';

// foodList(food1, food2, food3, food4, food5); // [ 'pizza', 'burger', 'pasta', 'fries' ]

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods); // [ 'pizza', 'burger', 'pasta', 'fries', 'salad' ]
*/

/*
// example 2, rest parameters
function sum(...nums) {

  let result = 0;
  for(let num of nums) {
    result += num;
  }
  return result;
}

const total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(`Total: ${total}`); // Total: 55
*/

/*
// example 3, rest parameters
function getAverage(...nums) {

  let result = 0;
  for(let num of nums) {
    result += num;
  }
  return result / nums.length;
}

const total = getAverage(75, 65, 85, 55, 95);

console.log(total); // 75.0
*/
 
// example 4, rest parameters

function combineStrings(...strings) {
  return strings.join(' ');
}

const sentence = combineStrings('Hello', 'World', 'JavaScript', 'ES6', 'Rest', 'Parameters');

console.log(sentence); // Hello World JavaScript ES6 Rest Parameters