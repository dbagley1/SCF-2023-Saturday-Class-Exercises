const parentDiv = querySelector('#container');
recipes.forEach(recipe => {
  const h1El = document.createElement('h1');
  const pEl = document.createElement('p');
  const imgEl = document.createElement('img');
  parentDiv.appendChild(h1El);
  parentDiv.appendChild(pEl);

  h1El.innerHTML = recipe.title;
  pEl.innerHTML = recipe.description;
  imgEl.src = recipe.imgURL;
});

const recipeResultsHTML = recipes.map(recipe => {
  return `
  <div>
  <h1>${recipe.title}</h1>
  <p>${recipe.description}</p>
  <img src=${recipe.imgURL} />
  </div>
  `;
});
parentDiv.innerHTML = recipeResultsHTML.join('');

recipes.forEach(recipe => {
  parentDiv.insertAdjacentHTML('beforeend', `
  <div>
  <h1>${recipe.title}</h1>
  <p>${recipe.description}</p>
  <img src=${recipe.imgURL} />
  </div>
  `);
});
