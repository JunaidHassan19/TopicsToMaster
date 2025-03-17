/*

  closure = A function fefined inside of another function, 
            the inner function has sccess to the variables 
            and scope of the outer function.
            Allow for private variables and state maintanance
            used frequently in JS libraries and frameworks: 
            React, Angular,Vue.

*/
/*
//Example 1
function outer() {

  let message = 'Hello World';

  function inner() {
    console.log(message);
  }

  inner();
}

outer(); 
*/

/*
//Example 2
function createCounter() {


    let count = 0;

    function increment() {
      
      count ++;
      console.log(`count incremented to ${count}`);
    }

    function getCount() {
      return count;
    }

    return{increment, getCount};
}

const counter = createCounter();


counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`count is ${counter.getCount()}`);
*/

//Example 3

function createGame() {
    let score = 0;

    function increaseScore(points) {
      score += points;
      console.log(`+${score}pts`);
    }

    function decreaceScore(points) {
      score -= points;
      console.log(`-${score}pts`);
    }


    function getScore() {
      return score;
    }

    return {increaseScore, decreaceScore, getScore};

}

const game = createGame();

game.increaseScore(10);
game.increaseScore(20);
game.decreaceScore(25);

console.log(`score is ${game.getScore()}`);