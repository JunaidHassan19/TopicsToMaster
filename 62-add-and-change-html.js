// -------- EXAMPLE 1 h1>

// STEP 1: CREATE ELEMENT
// const newH1 = document.createElement('h1');

const newListItems = document.createElement('li');



// STEP 2: ADD ATTRIBUTES/PROPERTY TO THE ELEMENT
// newH1.textContent = "Hello World";
// newH1.style.color = "red";
// newH1.style.fontSize = "50px";
// newH1.style.fontFamily = "Arial";
// newH1.style.textAlign = "center";

newListItems.textContent = 'coconut';
newListItems.id = 'coconut';
newListItems.style.fontWeight = 'bold';
newListItems.style.backgroundColor = 'lightblue';
newListItems.style.fontSize = '2rem';


// STEP 3: APPEND ELEMENT TO DOM
// document.body.appendChild(newH1);
// document.body.prepend(newH1);
// document.getElementById('box1').append(newH1);
// document.getElementById('box1').prepend(newH1);

// const box2 = document.getElementById('box2');
// document.body.insertBefore(newH1, box2);

// const boxes = document.getElementsByClassName('box');
// document.body.insertBefore(newH1, boxes[1]);

// document.body.prepend(newListItems);
document.getElementById('fruits').append(newListItems);

//REMOVE HTML ELEMENT
// document.body.removeChild(newH1);
// document.getElementById('box1').removeChild(newH1);