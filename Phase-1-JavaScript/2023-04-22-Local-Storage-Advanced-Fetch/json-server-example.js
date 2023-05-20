function getPosts() {
  return fetch('http://localhost:3000/posts')
    .then(res => res.json());
}

function createPost(post) {
  return fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json());
}

function updatePost(post) {
  return fetch(`http:localhost:3000/posts/${post.id}`, {
    method: 'PATCH',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

function deletePost(id) {
  return fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}

/* createPost({
  "title": "My New Post",
  "date": new Date().toLocaleDateString('en-US'),
  "author": "typicode"
}); */

getPosts().then((posts) => {
  document.body.innerHTML = posts.map((post) => `<li>${post.title}</li>`).join('\n');
});
