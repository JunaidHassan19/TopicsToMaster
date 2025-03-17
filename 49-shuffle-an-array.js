
// Shuffle an array of cards

// Fisher-Yates Shuffle Algorithm



const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suit = ['♠', '♣', '♥', '♦'];

Shuffle(cards);

console.log(cards);

function Shuffle(arrar) {
  for(let i = arrar.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [arrar[i], arrar[random]] = [arrar[random], arrar[i]];
  }
}