/*

 eventListeners = Listen fro specific key events to create intractive
                 web pages.
                 events: keydown, keyup, keypress
                  keydown: When a key is pressed down
                  keyup: When a key is released
                  keypress: When a key is pressed
                 document.addEventListener(event, callback)

*/
/*
document.addEventListener('keydown', (event) => {
    console.log(`Keydown =  ${event.key}`)
})

document.addEventListener('keyup', (event) => {
    console.log(`keyup =  ${event.key}`)
})
*/

const myBox = document.getElementById('myBox');
const moveAmount = 10;
let x = 0;
let y = 0;

// --- Change the text of the box to '😎' when a key is pressed down
document.addEventListener('keydown', (event) => {
  myBox.textContent = '😎';
  myBox.style.backgroundColor = 'tomato';
})

document.addEventListener('keyup', (event) => {
  myBox.textContent = '😉';
  myBox.style.backgroundColor = 'lightblue';
})


// --- Move the box when the arrow keys are pressed
document.addEventListener('keydown', (event) => {
  if(event.key.startsWith('Arrow')) {

    event.preventDefault();

    // --- Move the box
    switch(event.key) {
        case 'ArrowUp':
            y -= moveAmount;
            break;
        case 'ArrowDown':
            y += moveAmount;
            break;
        case 'ArrowLeft':
            x -= moveAmount;
            break;
        case 'ArrowRight':
            x += moveAmount;
            break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});