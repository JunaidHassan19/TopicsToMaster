const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;


function convert() {

  if(toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = temp * 9 / 5 + 32; //Formula
    result.textContent = temp.toFixed(1) + '°F'; // Alt+0176
  }
  else if(toCelsius.checked) {    
    temp = Number(textBox.value);
    temp = (temp - 32) * (5/9); //Formula
    result.textContent = temp.toFixed(1) + '°C'; // Alt+0176
  }
  else {
    result.textContent = 'Select a unit';
  }

}