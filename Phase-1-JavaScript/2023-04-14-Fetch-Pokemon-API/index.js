console.log('Running HTTP Requests');

// Display One Random User
function getOneRandomUser() {
  fetch('https://randomuser.me/api/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const user = data.results[0];
      const userContainer = document.querySelector('#user-container');
      userContainer.innerHTML = `
     <div>
     <img src="${user.picture.large}" />
     <h2>${user.name.first} ${user.name.last}</h2>
     <p>Email: ${user.email}</p>
     <p>Location: ${user.location.city}, ${user.location.state}</p>
     </div>
    `;
    });
}
// getOneRandomUser();

// Display Multiple Random Users
function getMultipleRandomUsers(resultCount) {
  fetch('https://randomuser.me/api/?results=' + resultCount + '&nat=US')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const userContainer = document.querySelector('#user-container');

      data.results.forEach((user) => {
        userContainer.innerHTML += `
        <div>
        <img src="${user.picture.large}" />
        <h2>${user.name.first} ${user.name.last}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.cell}</p>
        <p>Location: ${user.location.city}, ${user.location.state}, ${user.nat}</p>
        <p>
        Birthday: ${new Date(user.dob.date).toLocaleDateString('en-US', {
          year: "numeric",
          month: "short",
          day: "numeric"
        })}
        </p>
        </div>
        `;
      });
    });
}
// getMultipleRandomUsers(3);

// Display a Random Joke
async function getRandomJoke() {
  const response = await fetch(`https://v2.jokeapi.dev/joke/any?safe-mode`);
  const data = await response.json();
  console.log(data);

  if (data.type == 'single') {
    document.body.innerHTML += `<h2>${data.joke}</h2>`;
  } else {
    document.body.innerHTML += `
    <h2>${data.setup}</h2>
    <h2 class="joke-delivery">${data.delivery}</h2>
    `;

    const revealBtn = document.createElement('button');
    revealBtn.addEventListener('click', () => {
      document.querySelector('.joke-delivery').classList.toggle('reveal');
    });
    revealBtn.innerHTML = 'Reveal Delivery';
    document.body.append(revealBtn);
  }
}
