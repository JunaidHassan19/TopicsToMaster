/*

  .filter() = creates a new array with all elements that pass the test implemented by the provided function 
            
             = creates a new array by filtering out elements
*/

/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums); // [2, 4, 6, 8, 10]
console.log(oddNums); // [1, 3, 5, 7, 9]

function isEven(value) {
  return value % 2 === 0;
}

function isOdd(value) {
  return value % 2 !== 0;
}
*/

/*
const ages = [16, 17, 18, 32, 33, 40];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(adults); // [18, 32, 33, 40]
console.log(children); // [16, 17, 16]


function isAdult(age) {
  return age >= 18;
}

function isChild(age) {
  return age < 18;
}
*/

const words  = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords); // ['spray', 'limit', 'elite']
console.log(longWords); // ['exuberant', 'destruction', 'present']

function getShortWords(word) {
  return word.length <= 6;
}

function getLongWords(word) {
  return word.length > 6;
}