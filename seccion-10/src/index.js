import './styles.css';
import { TodoList } from './classes';
import { createTodoHtml, initTotalPendant } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(createTodoHtml);

/**
 * NOTA:
 * Tener en cuenta que un objeto literal es diferente a una instancia de clase.
 * Si solo tenemos un objeto listeral no podemos acceder a sus metodos, mientras que en el otro si
 */
