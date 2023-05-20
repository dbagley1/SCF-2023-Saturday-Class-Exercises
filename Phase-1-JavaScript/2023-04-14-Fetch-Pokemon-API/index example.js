function generateUser() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      console.log(data.results[0]);
    });
}

function generateUser() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      const userContainer = document.getElementById('user-container');
      userContainer.innerHTML = `
				<div>
					<img src="${user.picture.large}" alt="User Picture">
					<h2>${user.name.first} ${user.name.last}</h2>
					<p>Email: ${user.email}</p>
					<p>Location: ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
				</div>
			`;
    });
}
