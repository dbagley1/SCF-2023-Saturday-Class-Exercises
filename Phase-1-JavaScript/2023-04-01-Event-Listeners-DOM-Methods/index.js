console.log('Running');
// Create a <p> tag
const paragraphEl = document.createElement('p');
console.log(paragraphEl);
// Add text to the <p> tag
paragraphEl.innerHTML = 'Hello World';
console.log(paragraphEl);
// Add <p> tag to the <body>
document.body.appendChild(paragraphEl);

const postTitles = [
  "Title 1",
  "Title 2",
  "Title 3"
];
console.log(postTitles);

// Create a <p> tag for each Post Title
postTitles.forEach((title, index) => {
  const pTag = document.createElement('p');
  pTag.innerHTML = index + title;
  document.body.appendChild(pTag);
});

// Using a named function in our forEach to render titles
function renderTitle(title, index) {
  const pTag = document.createElement('p');
  pTag.innerHTML = (index + 1) + '. ' + title;
  document.body.appendChild(pTag);
}
postTitles.forEach(renderTitle);

// Examples of reusing the renderTitle() function
// [1, 2, 3].forEach(renderTitle);
// ["1", "2", "3"].forEach(renderTitle);

// Render post titles as <h3> elements
function renderTitleHeading(title, index) {
  const headingTag = document.createElement('h3');
  headingTag.innerHTML = (index + 1) + '. ' + title;
  document.body.appendChild(headingTag);
}
postTitles.forEach(renderTitleHeading);

// Define array of post descriptions
const postDescriptions = [
  "Post description 1",
  "Post description 2",
  "Post description 3"
];

// Append each post description to its post
// Iterate through the postDescriptions array
postDescriptions.forEach((desc, index) => {
  // Select the matching <h3> tag
  const title = document.querySelectorAll('h3')[index];
  // Create a <p> tag to hold the description text
  const descEl = document.createElement('p');
  descEl.innerHTML = desc;
  // Append the <p> tag to the <h3> tag
  title.appendChild(descEl);
});
