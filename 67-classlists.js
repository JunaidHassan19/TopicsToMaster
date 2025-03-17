/*

ClassList = Element property in JAvaScript used to interact with an 
            element's list of classes (CSS classes).
            Allows you to make reuasable classes for many  elements.
            across your webpage.
          = ClassList is a read-only property that returns a live    DOMTokenList collection of the class attributes of the element.

add() = Adds one or more classes to the element.
remove() = Removes one or more classes from the element.
toggle() = Toggles between a class name for an element.
replace() = Replaces an existing class with a new class name.
contains() = Checks if a specific class exists in the element's class list.


*/
/*
const myBtn = document.getElementById('myBtn');
const myH1 = document.getElementById('myH1');

// ---- Add a class to the element ----

// myBtn.classList.add('hover');
// myBtn.classList.remove('hover');

myBtn.addEventListener('mouseover', event => {
    event.target.classList.add('hover');
})

myBtn.addEventListener('mouseout', event => {
    event.target.classList.remove('hover');
})
*/

/*
// ---- Toggle a class on and off ----

myBtn.addEventListener('mouseover', event => {
  event.target.classList.toggle('hover');
})

myBtn.addEventListener('mouseout', event => {
  event.target.classList.toggle('hover');
})
*/

/*
// ---- Replace a class with another class ----

myBtn.classList.add('enabled');
myH1.classList.add('enabled');

myH1.addEventListener('click', event => {

  if(event.target.classList.contains('disabled')) {
    event.target.textContent += '🔍!';
  }
  else{
    event.target.classList.replace('enabled', 'disabled');
  }

  event.target.classList.replace('enabled', 'disabled');
});

// myBtn.addEventListener('dblclick', event => {
//   event.target.classList.replace('disabled', 'enabled');
// });
*/

let buttons = document.querySelectorAll('.myButtons');

buttons.forEach(button => {
  button.classList.add('enabled');
});

// buttons.forEach(button => {
//   button.classList.remove('enabled');
// });

buttons.forEach(button => {
  button.addEventListener('mouseover', event => {
    event.target.classList.toggle('hover');
  });
});

buttons.forEach(button => {
  button.addEventListener('mouseout', event => {
    event.target.classList.toggle('hover');
  });
});

buttons.forEach(button => {
  button.addEventListener('click', event => {
    event.target.classList.toggle('disabled');
  });
});