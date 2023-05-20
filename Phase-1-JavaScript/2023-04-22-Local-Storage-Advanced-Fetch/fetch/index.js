console.log('Running JSON Server');
// GET /posts from JSON-Server
async function getPosts() {
  const response = await fetch('http://localhost:3000/posts');
  const posts = await response.json();
  console.log(posts);
}
getPosts();

async function createPost(post) {
  const response = await fetch('http://localhost:3000/posts', {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json"
    }
  });
}
// createPost({id:3,title:"Post 3",author:"Darrian"});

async function updatePost(post) {
  const response = await fetch('http://localhost:3000/posts/' + post.id, {
    method: "PATCH",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json"
    }
  });
}
// updatePost({id:3,title:"Updated Post Title",author:"Darrian"});

async function deletePost(id) {
  const response = await fetch('http://localhost:3000/posts/' + id, {
    method: "DELETE"
  });
}
// deletePost(3);
