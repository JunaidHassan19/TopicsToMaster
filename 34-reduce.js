/*

  .reduce() = reduce the elements of an array to a single value
            
*/

/*
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

const total = prices.reduce(sum);

console.log(total);

function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}
*/

const grades = [50, 60, 70, 80, 90, 100];

const maxGrade = grades.reduce(getMaxGrade);
const minGrade = grades.reduce(getMinGrade);

console.log(maxGrade);
console.log(minGrade);

function getMaxGrade(accumulator, currentValue) {
  return Math.max(accumulator, currentValue);
}

function getMinGrade(accumulator, currentValue) {
  return Math.min(accumulator, currentValue);
}