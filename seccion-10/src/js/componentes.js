import { Todo } from '../classes';
import { todoList } from '../index';

// Html references
const divTodoList = document.querySelector('.todo-list');
const textInput = document.querySelector('.new-todo');
const btnDeleteCompleted = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const myFilters = document.querySelectorAll('.filtro');
const pendantNumber = document.querySelector('.todo-count-number');

export const createTodoHtml = (todo) => {
  const htmlTodo = `
    <li class="${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
            <label>${todo.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

  const div = document.createElement('div');
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

// Events
textInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && textInput.value.length > 0) {
    const newTodo = new Todo(textInput.value);
    todoList.createTodo(newTodo);
    createTodoHtml(newTodo);
    textInput.value = '';
    todoList.gettotalNotCompleted();
  }
});

divTodoList.addEventListener('click', (event) => {
  const elementName = event.target.localName;
  const todoElement = event.target.parentElement.parentElement;
  const todoId = todoElement.getAttribute('data-id');

  if (elementName.includes('input')) {
    todoList.markAsCompleted(todoId);
    todoElement.classList.toggle('completed');
  }

  if (elementName.includes('button')) {
    todoList.deleteTodo(todoId);
    divTodoList.removeChild(todoElement);
  }

  console.log(todoList);
});

btnDeleteCompleted.addEventListener('click', () => {
  todoList.deleteCompletedTasks();

  // Eliminar items de abajo hacia arriba debido al movimiento de indices
  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const element = divTodoList.children[i];
    if (element.classList.contains('completed')) divTodoList.removeChild(element);
  }
});

ulFilters.addEventListener('click', (event) => {
  const filter = event.target.text;
  if (!filter) return;

  myFilters.forEach((elem) => elem.classList.remove('selected'));
  event.target.classList.add('selected');

  for (const element of divTodoList.children) {
    element.classList.remove('hidden'); // Comportamiento por defecto
    const completed = element.classList.contains('completed');
    switch (filter) {
      case 'Pendientes':
        if (completed) {
          element.classList.add('hidden');
        }
        break;
      case 'Completados':
        if (!completed) {
          element.classList.add('hidden');
        }
        break;
    }
  }
});
