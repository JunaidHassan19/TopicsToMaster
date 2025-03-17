/*

  eventListener = Listen for specific events to create interactivity
                  web pages.
                  events: click, mouseover, mouseout
                  .addEventListener(event, callback/ function/ arrow function/ anonymous function)

*/

const myBox = document.getElementById('myBox');
const myBtn = document.getElementById('myBtn');


// function changeColor(event) {
//     event.target.style.backgroundColor = 'lightblue';
//     event.target.textContent = 'Clicked';
//     event.target.style.color = 'black';
// }

myBtn.addEventListener('click', (event) => {
  myBox.style.backgroundColor = 'lightblue';
  myBox.textContent = 'Clicked';
  myBox.style.color = 'black';
});



myBtn.addEventListener('mouseover', (event) => {
  myBox.style.backgroundColor = 'lightgreen';
  myBox.textContent = 'Mouse Over';
  myBox.style.color = 'black';
});



myBtn.addEventListener('mouseout', (event) => {
  myBox.style.backgroundColor = 'lightcoral';
  myBox.textContent = 'Mouse Out';
  myBox.style.color = 'black';
});