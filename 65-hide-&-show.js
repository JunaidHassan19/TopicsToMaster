const myButton = document.getElementById('myButton');
const myImage = document.getElementById('myImage');

// myButton.addEventListener('click', (event) => {
//   if (myImage.style.display === 'none') {
//     myImage.style.display = 'block';
//     myButton.textContent = 'Hide Image';
//   } else {
//     myImage.style.display = 'none';
//     myButton.textContent = 'Show Image';
//   }
// });

myButton.addEventListener('click', (event) => {
  if (myImage.style.visibility === 'hidden') {
    myImage.style.visibility = 'visible';
    myButton.textContent = 'Hide Image';
  } else {
    myImage.style.visibility = 'hidden';
    myButton.textContent = 'Show Image';
  }
});