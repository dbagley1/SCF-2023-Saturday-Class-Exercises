// document.addEventListener('DOMContentLoaded', () => {})
console.log('Running Local Storage.');

// Set variables to reference our elements
const count = document.querySelector('#count');
const decrementBtn = document.querySelector('#decrement-btn');
const incrementBtn = document.querySelector('#increment-btn');
console.log(count, decrementBtn, incrementBtn);

// Previously stored countValue
let savedCount = loadCount();

// Global variable countValue
let countValue = savedCount || 1;

// Update the count displayed on the page
function updateCountEl() {
  count.innerHTML = countValue;
}
updateCountEl();

// Save the count value to localStorage
function saveCount() {
  localStorage.setItem('count', countValue);
}
saveCount();

// Load the count value from localStorage
function loadCount() {
  return parseInt(localStorage.getItem('count'));
}
console.log(loadCount()); // Expect 1

// Function to add to the count, save the new value, and update the DOM
function addCount(num) {
  countValue += num;
  saveCount();
  updateCountEl();
}

// Increment and Decrement Button Event Listeners
incrementBtn.addEventListener('click', () => addCount(1));
decrementBtn.addEventListener('click', () => addCount(-1));
