/*
  Callbacks = a function that is passed as an argument to another function.
  The callback function is called inside the other function.


      used to handle asynchronous operations
      1. Reading a file
      2. Making an HTTP request
      3. Network request
      4. Intracting with a database
*/

/*
 hello(wait);

function hello(callback) {
  console.log("Hello");
  callback();
}

function wait() {
  console.log("Wait");
}

function leave() {
  console.log("Leave");
}

function goodBye() {
  console.log("Good Bye");
}
*/

sum(displayPage, 5, 10);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result){
  console.log(result);
}

function displayPage(result){
  document.getElementById('myH1').textContent = result;
}