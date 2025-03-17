/*

NodeLists = Static collection of HTML elements by (id, tag, class, etc)
            Can be created by querySelectorAll(), getElementsByTagName(),
            getElementsByClassName()
            Similar to arrays but not (map, filter, reduce) methods
            NodeList won't update to automatically reflect changes

*/

let buttons = document.querySelectorAll('.myButtons');

/*
//  --- ADD HTML/CSS PROPERTIES TO NODELISTS ---  

buttons.forEach((button) => {
    button.style.backgroundColor = 'blue';
    button.style.color = 'white';
    button.style.fontSize = '4em';
    button.style.border = 'none';
    button.style.borderRadius = '50px';
    button.textContent += '!';
    button.style.cursor = 'pointer';
});
*/

/*
// --- CLICK EVENT ON NODELISTS ---
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'tomato';
    event.target.style.color = 'white';
  });
});
*/

/*
// --- MOUESEOVER & MOUSEOUT EVENT ON NODELISTS ---
buttons.forEach((button) => {
  button.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'tomato';
  });
  button.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = '#4CAF50';
  });
});
*/

/*
// --- ADDING NEW ELEMENTS TO NODELISTS ---
//step 1: create new element
let newButton = document.createElement('button');
newButton.textContent = 'Button 4';
//step 2: create class for new element
newButton.classList = 'myButtons';
//step 3: append new element to document
document.body.appendChild(newButton);
*/

// --- REMOVE ELEMENTS FROM NODELISTS ---
buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.target.remove();
    buttons = document.querySelectorAll('.myButtons');
  })
});