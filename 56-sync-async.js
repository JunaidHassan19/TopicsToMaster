/*

Synchronous = Executes line by line continuously in a sequential manner. Code waits for each line to execute before moving to the next line.

Asynchronous = Allows multiple operations to be performed concurrently without weaiting Doesn't block the execution flow and allows the program to continue.
(I/O operations, network operations, file operations, etc.)
Handled with: Classbacks, Promises, Async/Await

*/
/*
// Synchronous
console.log('Start');
console.log('Middle');
console.log('End');

// Asynchronous
setTimeout(() => console.log('Start'), 2000);

console.log('Middle');
console.log('End');
*/

function fun1(callback) {
  setTimeout(() => {console.log('Task 1');
    callback()}, 2000);
   
  };

function fun2() {
  console.log('task 2');
  console.log('task 3');
  console.log('task 4');
}

fun1(fun2);