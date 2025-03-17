/*

setTimeout() = function in javascript that allowa you to schedule th eexecution of a function after an amount of time (milliseconds)
Times are approximate (varies based in the workload of the JavaScript runtime environment)

syntax: setTimeout(callback, delay);

clearTimeout(timeoutId) = can cancle a timeout before it triggers

*/

// Example 1

// function sayHello() {
//   window.alert("Hello");
// }

// setTimeout(sayHello, 3000);

// setTimeout(function() {
//   console.log("Hello");
// }, 3000);

// const setTimeoutId = setTimeout(() => {
//   console.log("Hello");
// }, 3000);

// clearTimeout(setTimeoutId);

let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("Timer done"), 3000);
  console.log("Timer started");
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("Timer cleared");
}