/*

element selectors = Methods used to target and manipulate HTML elements
                   They allows you to select one or multiple HTML elements from the DOM.
                   
1. Single Element Selectors:
    1. document.getElementById()
    2. document.querySelector()

2. Multiple Element Selectors:
    1. document.getElementsByClassName()
    2. document.getElementsByTagName()
    3. document.querySelectorAll()


1. document.getElementById(): ---> ELEMENT OR NULL
2. document.querySelector(): ---> ELEMENT OR NULL
3. document.getElementsByClassName(): ---> HTML COLLECTION
4. document.getElementsByTagName(): ---> HTML COLLECTION
5. document.querySelectorAll(): ---> NODE LIST.

*/
/*
// -- getElementById() --
const myHeading = document.getElementById('my-heading');
myHeading.style.color = 'red';
myHeading.style.backgroundColor = 'lightblue';
myHeading.textContent = 'Hello World';
myHeading.style.textAlign = 'center';
*/
/*
// -- querySelector() --
const myHeading = document.querySelector('#my-heading');
myHeading.style.color = 'red';
myHeading.style.backgroundColor = 'lightblue';
myHeading.textContent = 'Hello World';
myHeading.style.textAlign = 'center';
*/
/*
// -- getElementsByClassName() --
const fruits = document.getElementsByClassName('fruits');

// fruits[0].style.backgroundColor = 'red';
// fruits[0].style.color = 'white';

for(let fruit of fruits){
    fruit.style.backgroundColor = 'lightblue';
    fruit.style.color = 'red';
}
*/

/*
// -- getElementsByTagName() --
const h4Elements = document.getElementsByTagName('h4');
const liElements = document.getElementsByTagName('li');


// for(let h4 of h4Elements){
//     h4.style.color = 'blue';
//     h4.style.backgroundColor = 'lightgreen';
// }

// for(let li of liElements){
//     li.style.color = 'red';
//     li.style.backgroundColor = 'lightblue'

// }


Array.from(h4Elements).forEach((h4) => {
    h4.style.color = 'blue';
    h4.style.backgroundColor = 'lightgreen';
});

Array.from(liElements).forEach((li) => {
    li.style.color = 'red';
    li.style.backgroundColor = 'lightblue';
});
*/

/*
// -- querySelector() --

const element = document.querySelector('.fruits');
element.style.color = 'red';
*/

// -- querySelectorAll() --
const foods = document.querySelectorAll('li');

foods.forEach((food) => {
    food.style.color = 'red';
    food.style.backgroundColor = 'lightblue';
});