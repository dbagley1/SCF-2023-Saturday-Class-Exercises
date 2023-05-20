console.log('Running Todo List');
// Default Todos
let todoList = loadTodos() ? loadTodos() : [
  {
    id: 1,
    title: "Do something nice for someone I care about",
    completed: true,
  },
  {
    id: 2,
    title: "Memorize the fifty states and their capitals",
    completed: false,
  },
  {
    id: 3,
    title: "Watch a classic movie",
    completed: false,
  },
  {
    id: 4,
    title: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
  },
  {
    id: 5,
    title: "Solve a Rubik's cube",
    completed: false,
  }
];
console.log(todoList);

const todoContainer = document.querySelector('#todo-container');
console.log(todoContainer);

// Render a Todo Item
function renderTodo(todo) {
  const todoEl = document.createElement('li');
  todoEl.classList.add('list-group-item');
  todo.completed && todoEl.classList.add('completed');
  todoEl.innerHTML = `<span class="todo-title">${todo.title}</span>`;
  todoEl.addEventListener('click', () => { toggleTodoCompleted(todo.id); });

  // Render Delete Button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn', 'btn-danger');
  deleteBtn.innerHTML = '&times; Delete';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    deleteTodo(todo.id);
  });
  todoEl.append(deleteBtn);

  return todoEl;
}

//  Re-render All Todos
function updateTodos() {
  todoContainer.innerHTML = '';
  todoContainer.append(...todoList.map(renderTodo));
  showOrHideCompleted();
  saveTodos();
}

function toggleTodoCompleted(id) {
  const todo = todoList.find(todo => todo.id === id);
  todo.completed = !todo.completed;
  updateTodos();
}

// Create a Todo and Add to the Todo List
function createTodo(title) {
  todoList.push({
    id: new Date(),
    title,
    completed: false
  });
  updateTodos();
}

const newTodoForm = document.querySelector('#new-todo-form');
newTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createTodo(newTodoForm.elements['title'].value);
});

// Delete a Todo
function deleteTodo(id) {
  todoList = todoList.filter(todo => todo.id !== id);
  updateTodos();
}

const showCompletedInput = document.querySelector('#show-completed');
showCompletedInput.addEventListener('change', showOrHideCompleted);

function showOrHideCompleted() {
  const completedTodos = document.querySelectorAll('.completed');
  completedTodos.forEach(el => {
    el.style.display = showCompletedInput.checked ? null : 'none';
  });
  localStorage.setItem('show-completed', showCompletedInput.checked);
}

// Save Global todoList to LocalStorage
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todoList));
}
// Load todoList from LocalStorage if it is defined
function loadTodos() {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : undefined;
}

showCompletedInput.checked = !!JSON.parse(localStorage.getItem('show-completed'));

updateTodos();

// More examples of storing User Options and Todos
/* let options = {
  showCompleted: true,
  searchInput: "build"
};
localStorage.setItem(JSON.stringify(options));
localStorage.getItem(JSON.parse(options));

const appState = {
  todos: [],
  options: {}
}; */
