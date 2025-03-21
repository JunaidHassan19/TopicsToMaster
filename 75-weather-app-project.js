const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apikey = '07f583058753d115c13dd0a5dbb46168';

weatherForm.addEventListener('submit', async event => {

   event.preventDefault();

  const city = cityInput.value;

  if(city) {
    try{
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    }
    catch(error) {
      console.error(error);
      displayError('An error occured while fetching the weather data');
    }
  }
  else {
    displayError('Please enter a city name');

  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  const response = await fetch(apiUrl);

  if(!response.ok) {
    throw new Error('An error occured while fetching the weather data');
  }

  return await response.json();
}

function displayWeatherInfo(data) {
  const {name: city,
         main: {temp, humidity}, 
         weather: [{description, id}]} = data;

  card.textContent = '';
  card.style.display = 'flex';

  const cityDisplay = document.createElement('h1');
  const tempDisplay = document.createElement('p');
  const humidityDisplay = document.createElement('p');
  const descDisplay = document.createElement('p');
  const weatherEmoji = document.createElement('p');

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeaterEmoji(id);

  cityDisplay.classList.add('cityDisplay');
  tempDisplay.classList.add('tempDisplay');
  humidityDisplay.classList.add('humidityDisplay');
  descDisplay.classList.add('descDisplay');
  weatherEmoji.classList.add('weatherEmoji');

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);

}

function getWeaterEmoji(weatherId) {
  switch(true) {
    case weatherId < 300:
      return '⛈️';
    case weatherId < 500:
      return '🌧️';
    case weatherId < 600:
      return '🌧️';
    case weatherId < 700:
      return '❄️';
    case weatherId === 800:
      return '☀️';
    case weatherId < 804:
      return '☁️';
    default:
      return '🤷';
  }
}

function displayError(message) {
  const errorDisplay = document.createElement('p');
  errorDisplay.textContent = message;
  errorDisplay.classList.add('errorDisplay');
  card.textContent = '';
  card.style.display = 'flex';
  card.appendChild(errorDisplay);
}