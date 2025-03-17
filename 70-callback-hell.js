/*

Callback Hell = Situation in JavaScript where callbacks are nested
                within other callbacks to the degree where the code
                is difficult to read or follow.
                Old way of handling asynchronous code.
                Use promises + async/await to avoid callback hell.

*/

function task1(callback) {
  setTimeout(() => {
    console.log('Task 1 completed');
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
  console.log('Task 2 completed');
  callback();
  }, 1050);
}

function task3(callback) {
  setTimeout( () => {
    console.log('Task 3 completed');
    callback();
}, 2000);
}

function task4(callback) {
  setTimeout(() => {
    console.log('Task 4 completed');
    callback();
  }, 2050);
}

function task5(callback) {
  setTimeout(() => {
    console.log('Task 5 completed');
    callback();
  }, 3000);
}

function task6(callback) {
  setTimeout(() => {
    console.log('Task 6 completed');
    callback();
  }, 3050);
}

function task7(callback) {
  setTimeout(() => {
    console.log('Task 7 completed');
    callback();
  }, 4000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          task6(() => {
            task7(() => {
              console.log('All tasks completed');
            });
          });
        });
      });
    });
  });
});