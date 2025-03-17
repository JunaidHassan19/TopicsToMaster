/*

 Fetch = Function used for making HTTP requests to fetch resources.
        (JSON style data, images, etc.)
        Simplifies async data fetching in JavaScript and 
        used for intracting with APIs to retrieve and send data
        asynchronously. ouer the web.
        fetch(url, {options})
        .then(response => response.json())

*/

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//      .then(response => {

//          if(!response.ok) {
//               throw new Error('Could not fetch the data for that resource');
//          }
//           return response.json();

//      })
//      .then(data => console.log(data))
//      .catch(error => console.log(error));

fetchData();

async function fetchData() {

  try{

    const pokemonName = document.getElementById('pokemonName').value;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if(!response.ok) {
      throw new Error('Could not fetch the data for that resource');
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement =document.getElementById('pokemonSprite');

    imgElement.src = pokemonSprite;
    imgElement.style.display = 'block';
    console.log(data);

  }
  catch(error){
    console.log(error);
  }
}