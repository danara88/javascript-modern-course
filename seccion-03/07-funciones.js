/**
 * El objetivo principal de las funciones es centralizar la lógica la cual se utilizará varias veces en la aplicación.
 * Es buena práctica primero poner las definiciones de las funciones y luego las llamadas.
 */

/**
 * Nota 1:
 * Las funciones tradicionales tienen por dentro una propiedad llamada arguments.
 * En las funciones cuando no retornan nada, retornan undefined
 */

// No es buena práctica por que no esta asignada a una constante como medida de seguridad
function saludar(name) {
    console.log(arguments); // Todos los elementos enviados a la función
    console.log('Hello World ' + name);
}

// Estos es una función anónimo (Buena práctica por que esta asignada a una constante)
const saludar2 = function saludar2() {
    console.log('Hola mundo');
}

// Esto no marca error a pesar de no tener los parámetros definido
saludar('Daniel', true, 20202);

// Arrow function
// Es buena práctica ponerle al parametro los parentesis para mayor claridad en el código
// Estas son más eficientes que las tradicionales
const saludarFlecha = ( name ) => {
    console.log('Saludar flecha ' + name);
}

saludarFlecha('Daniel');

const getAleatroio = () => Math.random();

console.log(getAleatroio());