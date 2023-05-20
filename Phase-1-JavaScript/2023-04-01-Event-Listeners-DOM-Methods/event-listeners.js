console.log('Running Event Listeners');
const colorForm = document.querySelector('#color-form');
const colorInput = document.querySelector('#color-input');

// Event listener for form submission
colorForm.addEventListener('submit', (event) => {
  // Prevent page from refreshing when form is submitted
  event.preventDefault();
  console.log('Form was submitted');

  // Get the current value of the textbox
  const colorInputVal = colorInput.value;
  console.log(colorInputVal);

  // Set the <body> background-color to the value that was entered
  document.body.style.backgroundColor = colorInputVal;
});

// Querying our Add Text Form & Input
const newTextForm = document.querySelector('#new-text-form');
const newTextInput = document.querySelector('#text-input');
console.log(newTextForm);
console.log(newTextInput);

// Adding our Submit Event Listener to the Add Text Form
newTextForm.addEventListener('submit', (e) => {
  // Prevent refreshing
  e.preventDefault();
  console.log('New Text Form was Submitted');

  // Create a new <p> to hold the text
  const newTextEl = document.createElement('p');
  // Add a class to each <p>
  newTextEl.classList.add('added-text');
  // Set the content of the <p> to the value of the user input
  newTextEl.innerHTML = newTextInput.value;

  // Add a click event to each text element that changes its color to red
  newTextEl.addEventListener('click', () => {
    newTextEl.style.color = 'red';
  });

  // Add the new text element to the <body>
  document.body.appendChild(newTextEl);

  // Reset the value of the input textbox
  newTextInput.value = '';

  // Unhide the "Clear Text Elements" Button
  clearTextBtn.removeAttribute('hidden');
  // clearTextBtn.style.display = null;
});

// Querying our "Clear Text Elements" Button
const clearTextBtn = document.querySelector('#clear-text-btn');
console.log(clearTextBtn);

// Function we'll pass to the Clear Text Elements Button Click Event
function clearAddedText() {
  // Query all added-text elements and remove them
  document.querySelectorAll('.added-text').forEach((el) => el.remove());
  // Rehide our Clear Text Elements Button
  clearTextBtn.setAttribute('hidden', null);
  // clearTextBtn.style.display = 'none';
}
// Passing the callback function to the 'click'
clearTextBtn.addEventListener('click', clearAddedText);





















// document.body.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  console.log(event);
  console.log(event.key);
  if (event.key == 'a') {
    alert('A was pressed');
  }
}
