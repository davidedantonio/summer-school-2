import { getAllTodos } from "./todo";
const todoButton = document.getElementById('add');
const todoList = document.getElementById('todos');

async function addTodo (e) {
  const todo = document.getElementById('todo').value;
  if (!todo) {
    alert("Todo is empty")
  }
  
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox';
  checkbox.id = 'id';

  const label = document.createElement('label');
  label.htmlFor = 'id';
  label.innerHTML = todo;

  const todoItem = document.createElement('li')
  todoItem.append(checkbox);
  todoItem.append(label);

  todoList.appendChild(todoItem);
  document.getElementById('todo').value = '';
}

function renderTodos () {
  getAllTodos()
    .then(response => console.log(todos))
}

todoButton.addEventListener('click', addTodo);