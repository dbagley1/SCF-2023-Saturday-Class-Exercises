console.log('Running DOM Methods');
const postData = [
  {
    "title": "Post Title 1",
    "desc": "Post Description 1"
  },
  {
    "title": "Post Title 2",
    "desc": "Post Description 2"
  },
  {
    "title": "Post Title 3",
    "desc": "Post Description 3"
  },
  {
    "title": "Post Title 4",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut dolorum fuga nam asperiores cumque, velit maiores adipisci quae accusamus aliquam eaque eum laboriosam. Quos quisquam eligendi natus dignissimos sint."
  }
];
console.log(postData);
console.log(postData[0]);

// Query the div#post-container element
const postContainer = document.querySelector('#post-container');
console.log(postContainer);

postData.forEach((postObj) => {
  // Create a div.post element and append it to #post-container
  const postDiv = document.createElement('div');
  postDiv.classList.add('post');
  postContainer.appendChild(postDiv);

  // Create an <h3> element
  const postTitleEl = document.createElement('h3');
  // Add the post title as its content
  postTitleEl.innerHTML = postObj.title;
  // Append the <h3> to the post div
  postDiv.appendChild(postTitleEl);

  // Create a <p> element
  const postDescEl = document.createElement('p');
  postDescEl.innerHTML = postObj.desc;
  postDiv.appendChild(postDescEl);
});
console.log(postContainer);

document.body.innerHTML += 'Hello World.';
document.body.insertAdjacentHTML('beforeend', '<p>Hello World 2.</p>');
