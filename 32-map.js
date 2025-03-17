/*

  .map() = accepts a callback and applies that function to each element of an array,that return a new array with the same length.

  .map() = does not change the original array.

*/
/*
// Example 1
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element) {
  return Math.pow(element, 2 );
}

function cube(element) {
  return Math.pow(element, 3);
}
  */

/*
//Example 2
const students = ['John', 'Jane', 'Bob', 'Alice', 'Mary'];
const upperCaseStudents = students.map(upperCase);

console.log(upperCaseStudents);

function upperCase(element) {
  return element.toUpperCase();
}
*/

//Example 3
const dates = ['2025-01-01', '2025-01-02', '2025-01-03', '2025-01-04', '2025-01-05'];

const formattedDates = dates.map(formatDate);

console.log(formattedDates);

function formatDate(date) {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
}