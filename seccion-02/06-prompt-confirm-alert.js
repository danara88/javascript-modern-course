// EL alert bloquea la ejecución del código
alert('Hello world');

// Rescatar por un prompt lo ingresado por el usuario
let name = prompt('Cual es tu nombre ? ', 'Sin nombre');

// Mensaje de confirmación
let seleccion = confirm('Estas seguro de borrar esto ??');

// Muy parecido al objeto window en node
// console.log( global );

/**
 * NOTA 1:
 * Todos estos métodos son parte del objeto global window.
 * En node no existe el objeto global window
 */

