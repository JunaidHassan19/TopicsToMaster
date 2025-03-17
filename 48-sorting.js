/*

Sorting = arranging items in a list in a certain order. Sorting is commonly used as the first step in many different tasks. The most common task is to make finding things easier, but there are other uses as well.
 
       = sort() method used to sort elements of an array in place.
         Sorts elements as lexicographic order, not alphabetical.
         laxicographic order is the order in which words are listed in the dictionary.(alphabet + numbers + symbols) as strings.

*/
/*
let fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear'];

fruits.sort();

console.log(fruits);

let numbers = [1, 3, 2, 5, 4, 10, 6, 7, 9, 8];

numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);
*/

const people = [
  {name: 'John', age: 20, height: 6},
  {name: 'Jane', age: 30, height: 5},
  {name: 'Jim', age: 25, height: 5.5},
  {name: 'Jack', age: 15, height: 4.5},
  {name: 'Jill', age: 40, height: 5.8}
];

people.sort((a, b) => {
  // return a.age - b.age;
  // return a.height - b.height;
  return a.name.localeCompare(b.name);
})

console.log(people);