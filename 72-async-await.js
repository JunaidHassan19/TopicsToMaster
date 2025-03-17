/*

Async/Await = async = make a function return a Promise
              await = make an async function wait for a Promise

              Allows you to write asynchronous code in a manner
              Async doesn't have resolve or reject parameteers
              Everthing after Await is placed in an event queue

*/

// 1. WALK THE DOG
function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isDogSick = true;

      if (isDogSick) {
        resolve("Dog is walked");
      } else {
        reject("Dog is sick");
      }
    }, 1000);
  });
}

// 2. CLEAN THE ROOM
function cleanTheRoom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isRoomClean = true;

      if (isRoomClean) {
        resolve("Room is cleaned");
      } else {
        reject("Room is dirty");
      }
    }, 2000);
  });
}

// 3. GO TO THE GYM
function goToTheGym() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isGymDone = true;

      if (isGymDone) {
        resolve("Gym is done");
      } else {
        reject("Gym is not done");
      }
    }, 3000);
  });
  l;
}


async function doAllTasks() {

  try{
    const walkTheDogResult = await walkTheDog();
    console.log(walkTheDogResult);

    const cleanTheRoomResult = await cleanTheRoom();
    console.log(cleanTheRoomResult);

    const goToTheGymResult = await goToTheGym();
    console.log(goToTheGymResult);

    console.log("All tasks are done");
  }
  catch(error){
    console.error(error);
  }
}

doAllTasks();