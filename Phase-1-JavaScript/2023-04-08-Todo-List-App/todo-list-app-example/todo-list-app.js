console.log('Running Todo List App');
// Define Sample Todos
let todos = [
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
console.log(todos);

// Query todo list container
const todoContainer = document.querySelector('#todo-container');
console.log(todoContainer);

// Function to create a todo list item element
function renderTodo(todoObj) {
  // Create div and add classes
  const todoItemEl = document.createElement('div');
  todoItemEl.classList.add('list-group-item', 'todo-item');
  
  // Conditionally add 'completed' class
  if (todoObj.completed) {
    todoItemEl.classList.add('completed');
  }
  
  // Add Todo Text
  todoItemEl.innerHTML = todoObj.title;

  // Add Click Event to complete Task
  todoItemEl.addEventListener('click', () => toggleComplete(todoObj));

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn', 'btn-outline-danger');
  deleteBtn.innerHTML = '&times; Delete';

  // Add click event to delete button to remove Todo
  deleteBtn.addEventListener('click', () => deleteTodo(todoObj));
  todoItemEl.appendChild(deleteBtn);

  return todoItemEl;
}

function renderTodos() {
  todoContainer.innerHTML = '';
  todos.forEach((todo) => todoContainer.appendChild(renderTodo(todo)));
}
renderTodos();

// Function to toggle completed status of todo
function toggleComplete(todoObj) {
  // Set completed status to opposite of current value
  todoObj.completed = !todoObj.completed;
  // Re-render todo list
  renderTodos();
}

function deleteTodo(todoObj) {
  // Remove the deleted todo from the array
  todos = todos.filter(todo => todo !== todoObj);
}

const newTodoForm = document.querySelector('#new-todo-form');
newTodoForm.addEventListener('submit', addNewTodo);

function addNewTodo(e) {
  e.preventDefault();
  const newTodo = {
    title: document.querySelector('#new-todo-input').value,
    id: new Date(),
    completed: false
  };
  todos.push(newTodo);
  renderTodos();
}
