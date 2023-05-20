const todoContainer = document.querySelector('#todo-container');

// Default Todos
let todoList = [
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

// Render A Todo Item
function renderTodo(todo) {
  const todoEl = document.createElement('li');
  todoEl.classList.add('list-group-item', 'todo-item');
  todo.completed && todoEl.classList.add('completed');
  todoEl.innerHTML = `<span class="todo-title">${todo.title}</span>`;
  todoEl.addEventListener('click', () => toggleCompleteTodo(todo.id));

  const deleteBtn = document.createElement('btn');
  deleteBtn.classList.add('btn', 'btn-outline-danger');
  deleteBtn.innerHTML = '&times; Delete';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    deleteTodo(todo.id);
  });
  todoEl.append(deleteBtn);
  return todoEl;
}

// Re-Render All Todos
function updateTodos() {
  todoContainer.innerHTML = '';
  todoContainer.append(...todoList.map(renderTodo));
}

// Remove Todo
function deleteTodo(id) {
  todoList = todoList.filter(todo => todo.id !== id);
  updateTodos();
}

// Add Todo
function createTodo(title) {
  todoList.push({
    title,
    id: new Date(),
    completed: false
  });
  updateTodos();
}

// New Todo Form Event Listener
const newTodoForm = document.querySelector('#new-todo-form');

newTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = newTodoForm.elements['title'];
  createTodo(titleInput.value);
  titleInput.value = '';
});

function toggleCompleteTodo(id) {
  const todo = todoList.find(todo => todo.id === id);
  todo.completed = !todo.completed;
  updateTodos();
}

updateTodos();
