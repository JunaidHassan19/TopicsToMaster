/*

 Spread Operator = ... allows an iterable such as an array expression or 
                       string to be expanded into seperate elements.
                        (unpacks and elements)

*/
/*
let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(...numbers); // 1 2 3 4 5
console.log(max); // 5
console.log(min); // 1
*/
/*
let userName = "Junni";
// let letters = [...userName].join("-");
let letters = [...userName];

console.log(letters); // [ 'J', 'o', 'h', 'n' ]
*/

let fruits = ["apple", "banana", "mango"];
let newFruits = ["orange", "watermelon" , ...fruits];
let vegetables = ["potato", "onion", "tomato"];

let foods = [...newFruits, ...vegetables];

console.log(fruits); // [ 'apple', 'banana', 'mango' ]
console.log(newFruits); // [ 'orange', 'grape', 'watermelon', 'apple', 'banana', 'mango' ]
console.log(foods); // [ 'orange', 'grape', 'watermelon', 'apple', 'banana', 'mango', 'potato', 'onion', 'tomato' ]