/*

Promises are a way to handle asynchronous operations in JavaScript. 
        They are easy to manage when dealing with multiple asynchronous
        operations where callbacks can create callback hell leading to
        unmanageable code.

Promis = An Object that manage asynchronous operations. 
         Wrap a promise object around {asyne code} 
         PENDING -> FULFILLED or REJECTED
         new Promise( (resolve, reject) => {asyne code} )

  DO THIS CHORES IN ORDER

  1. WALK THE DOG
  2. CLEAN THE ROOM
  3. GO TO THE GYM

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

// METHOD CHAINING
walkTheDog().then((value) => {console.log(value); return cleanTheRoom()})
            .then((value) => {console.log(value); return goToTheGym()})
            .then((value) => {console.log(value); console.log("All chores are done")})
            .catch((error) => console.error(error));