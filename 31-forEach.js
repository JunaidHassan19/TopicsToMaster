/*

forEach() = method used to iterate over the elementsof an array and apply a specific function (callback) to each element.

Syntax: array.fprEach(callback);
*/

/*
// Example 1
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display); // 1, 2, 3, 4, 5
// numbers.forEach(double); // 2, 4, 6, 8, 10
// numbers.forEach(truple); // 3, 6, 9, 12, 15
// numbers.forEach(square); // 1, 4, 9, 16, 25
numbers.forEach(cube); // 1, 8, 27, 64, 125


function double(element, index, array) {
    array[index] = element * 2;
}

function truple(element, index, array) {
    array[index] = element * 3;
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array) {
    array[index] = Math.pow(element, 3);
}

function display(element) {
    console.log(element);
}
*/

// Example 2
let fruits = ['apple', 'banana', 'mango', 'orange', 'papaya'];

fruits.forEach(display); // apple, banana, mango, orange, papaya
fruits.forEach(upperCase); // APPLE, BANANA, MANGO, ORANGE, PAPAYA
fruits.forEach(lowerCase); // apple, banana, mango, orange, papaya
fruits.forEach(captialize); // Apple, Banana, Mango, Orange, Papaya

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
    array[index] = element.toLowerCase();
}

function captialize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
    console.log(element);
}