/*
  IF STATEMENTS = if a condition is true, execuute some code
                  if not, do something else
*/

/*
let age = 10;

if(age >= 18) {
  console.log('Adult');
} else {
  console.log('Minor');
};
*/

/*
let time = 14;

if(time < 12) {
  console.log('Good Morning!');
} else {
  conosle.log('Good Afternoon!');
}
*/

/*
let isStudent = true;

if(isStudent) {
  console.log('You are a student')
} else {
  console.log('You are not a student');
}
*/

/*
let age = 25;
let hasLicense = true;

if(age >= 19) {
  console.log('You are old enough to drive');

  if(hasLicense) {
    console.log('You have your license');
  } else {
    console.log('You do not have your license yet');
  }
} else {
  console.log('You can not drive');
}
*/

/*
let age = 200;

if (age >= 100) {
  console.log('You are too old');
} else if(age < 0) {
  console.log('Your age can not be blow zero');
} else if(age >= 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}
*/

const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById('resultElement');
let age;


mySubmit.onclick = function() {

  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = `You are too old`;
  } else if(age < 0) {
    resultElement.textContent = `Your age can not be blow zero`;
  } else if(age >= 18) {
    resultElement.textContent = `Adult`;
  } else {
    resultElement.textContent = `Minor`;
  }
}