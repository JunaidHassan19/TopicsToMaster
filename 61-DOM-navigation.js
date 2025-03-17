/*

DOM Navigation = The process of navigating through the structure of an
                 HTML document is known as DOM navigation.


    .firstElementChild
    .lastElementChild
    .nextElementSibling
    .previousElementSibling
    .parentElement
    .children
*/

/*
// 1.------ firstElementChild -------
       // The firstElementChild property returns
       // the first child element of the specified element.

// const element = document.getElementById('fruits');
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = 'red';  

const ulElements = document.querySelectorAll('ul');

ulElements.forEach((ulElements) => {
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = 'red';
});
*/

/*
// 2.------ lastElementChild -------
           // The lastElementChild property returns the last
           // child element of the specified element.

// const element = document.getElementById('fruits');
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = 'lightblue';

const ulElements = document.querySelectorAll('ul');

ulElements.forEach((ulElements) => {
    const lastChild = ulElements.lastElementChild;
    lastChild.style.backgroundColor = 'lightblue';
});
*/

/*
// 3.------ nextElementSibling -------
         // The nextElementSibling property returns the element 
         // immediately following the specified element, in the 
         // same tree level.


const element = document.getElementById('vegetables');
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = 'lightblue';
*/

/*
// 4.------ previousElementSibling -------
        // The previousElementSibling property returns the element
        // immediately preceding the specified element,
        //  in the same tree level.

const element = document.getElementById('vegetables');
const previousSibling = element.previousElementSibling;
previousSibling.style.backgroundColor = 'lightblue';
*/

/*
// 5.------ parentElement -------
        // The parentElement property returns the parent element of the specified element.

const element = document.getElementById('apple');
const parentElement = element.parentElement;
parentElement.style.backgroundColor = 'lightblue';
*/

//6.------ children -------
          // The children property returns a collection 
          // of an element's child elements, as an HTMLCollection 
          // object.

const element = document.getElementById('desserts');
const children = element.children;

// children[0].style.backgroundColor = 'lightblue';
// children[1].style.backgroundColor = 'lightblue';

Array.from(children). forEach((child) => {
    child.style.backgroundColor = 'lightblue';
});