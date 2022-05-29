/**
 * Class to manage todo list
 */
export class Todo {
  /**
   * Static method to transform into an instance
   * @param {*} param0
   * @returns
   */
  static fromJson({ id, task, completed, createdAt }) {
    const tempTodo = new Todo(task);

    tempTodo.id = id;
    tempTodo.completed = completed;
    tempTodo.createdAt = createdAt;

    return tempTodo;
  }

  /**
   * Main constructor
   * @param {*} task
   */
  constructor(task) {
    this.task = task;
    this.id = new Date().getTime();
    this.completed = false;
    this.createdAt = new Date();
  }
}
