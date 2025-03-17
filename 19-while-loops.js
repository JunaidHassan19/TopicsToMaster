// While loop = repeat some code WHILE some conditions is true

/*

{
  let userName = '';

  if(userName === '') {
    console.log("You didn't enter your name");
  }
  else {
    console.log(`Hello ${userName}`);
  }
}
*/

/*
// --- While loop ----
let userName = '';

while(userName === '' || userName === null) {
  userName = window.prompt(`Enter your Username`);
}
console.log(`Hello ${userName}`);
*/
/*
// ---- do-while loop ----
let userName;

do {
  userName = window.prompt(`Enter your Username`);
} while(userName === '' || userName === null)
  console.log(`Hello ${userName}`);
*/

/*
//---- While loop ----
let loggedIn = false;
let userName;
let password;

while(!loggedIn) {
  userName = window.prompt('Enter your Username');
  password = window.prompt('Enter your Password');

  if(userName === 'js' && password === 'js') {
    loggedIn = true;
    console.log('You are logged in!');
  }
  else {
    console.log('Invalid userName or Password! Please try again')
  }
}
*/

// ---- do-while ----

let loggedIn = false;
let userName;
let password;

do{
  userName = window.prompt('Enter your Username');
  password = window.prompt('Enter your Password');

  if(userName === 'js' && password === 'js') {
    loggedIn = true;
    console.log('You are logged in!');
  }
  else {
    console.log('Invalid userName or Password! Please try again')
  }
}
while(!loggedIn) 