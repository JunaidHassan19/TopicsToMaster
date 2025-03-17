function rollDice() {

  const numOfDice = document.getElementById('numOfDice').value;
  const diceResult = document.getElementById('diceResult');
  const diceImgs = document.getElementById('diceImgs');
  const values = [];
  const images = [];


  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="../images/28-dice-imgs/${value}.JPG" alt="dice ${value}">`);

  }
  diceResult.textContent = `dice: ${values.join('')}`;
  diceImgs.innerHTML = images.join('');
}