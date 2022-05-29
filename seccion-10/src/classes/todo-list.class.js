import { Todo } from './todo.class';

export class TodoList {
  /**
   * Main constructor
   */
  constructor() {
    this._getLocalStorage();
  }

  /**
   * Method to create a new todo
   * @param {*} todo
   */
  createTodo(todo) {
    this.todos.push(todo);
    this._saveLocalStorage();
  }

  /**
   * Method to mark todo item as completed
   * @param {*} id
   */
  markAsCompleted(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completed = !todo.completed;
        break;
      }
    }
    this._saveLocalStorage();
  }

  /**
   * Method to delete a todo
   * @param {*} id
   */
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this._saveLocalStorage();
  }

  /**
   * Method to delete completed tasks
   */
  deleteCompletedTasks() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this._saveLocalStorage();
  }

  /**
   * Private method to save into local storage
   */
  _saveLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  /**
   * Private method to get local storage data
   * @returns
   */
  _getLocalStorage() {
    // Aqui se inicializa la propiedad this.todos
    this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    this.todos = this.todos.map(Todo.fromJson);
  }
}
