const totalPokeCount = 1010;
const allPokeIDs = [...Array(totalPokeCount)].map((x, i) => i);
const displayCount = 20;

function getRandomIDs(count) {
  const ids = [...allPokeIDs];
  const randomIDs = [];
  for (let i = 0; i < count; i++) {
    const randomID = ids.splice(Math.floor(Math.random() * ids.length), 1)[0];
    randomIDs.push(randomID);
  }
  return randomIDs;
}

async function getPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  return pokemon;
}

function getMultiplePokemon(ids) {
  return ids.map(id => getPokemon(id));
}

function main() {
  Promise.all(getMultiplePokemon(getRandomIDs(displayCount)))
    .then((pokemonArray) => {
      pokemonArray.forEach(pokemon => {
        document.querySelector('.pokemon-container').innerHTML += `
      <div class="col">
      <div class="card">
        <div class="card-body text-center">
          <img class="w-100" src="${pokemon.sprites.other['official-artwork']['front_default']}" />
          <h2>${pokemon.name}</h2>
          <p>Types: ${pokemon.types.map(type => type.type.name).join(' ')}</p>
        </div>
      </div>
      </div>
      `;
      });
    });
}

main();
