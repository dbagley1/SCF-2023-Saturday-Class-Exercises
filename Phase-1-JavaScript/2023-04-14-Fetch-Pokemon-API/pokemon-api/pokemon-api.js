console.log('Running Pokemon API.');

const pokemonContainer = document.querySelector('.pokemon-container');

// Define Base API URL
const baseURL = 'https://pokeapi.co/api/v2';

// Get Data about a Pokemon from the PokeAPI
async function getPokemon(idOrName) {
  return fetch(`${baseURL}/pokemon/${idOrName}`)
    .then(res => res.json());
}
// getPokemon('bulbasaur')
// .then(pokemon => renderPokemon(pokemon))
// .then(pokemonEl => pokemonContainer.innerHTML += pokemonEl);

// Return the HTML of a Pokemon's Info
function renderPokemon(pokemon) {
  return `
  <div class="col text-center card">
  <img src="${pokemon.sprites.front_default}" />
  <h2>${pokemon.name}</h2>
  <p>Type(s): ${pokemon.types.map(type => type.type.name).join(', ')}</p>
  </div>
  `;
}

// Returns an array of promises containing pokemon requests
function getMultiplePokemon(ids) {
  return ids.map(id => getPokemon(id));
}

function renderMultiplePokemon(ids) {
  Promise.all(getMultiplePokemon(ids))
    .then((pokemonArray) => {
      console.log(pokemonArray);
      pokemonArray.forEach((pokemon) => {
        pokemonContainer.innerHTML += renderPokemon(pokemon);
      });
    });
}

function getRandomIDs(count) {
  const allIDs = [...Array(1010)].map((x, index) => index + 1);
  const randomIDs = [];
  for (let i = 0; i < count; i++) {
    randomIDs.push(allIDs.splice(Math.floor(Math.random() * allIDs.length), 1)[0]);
  }
  return randomIDs;
}

// Function to run all of our functions in the proper order
function main() {
  renderMultiplePokemon(getRandomIDs(3));

  // Add Randomize Button Functionality
  document.querySelector('#randomize-btn')
    .addEventListener('click', () => {
      const randomCount = +document.querySelector('#random-count').value;
      pokemonContainer.innerHTML = '';
      renderMultiplePokemon(getRandomIDs(randomCount));
    });
}
main();
