/**
 * Los arreglos son una estructura de datos que contienen una colección de elementos.
 * Es un objeto.
 */

// Alternativa 1 (no es muy común)
const arr = new Array(10);

// Alternativa 2 
const arr2 = [];

// Ejercicio
const arrEjercicio = ['Hello', 21, true, ['Javier', 'Daniel', 'Dario']];
let arrSub2 = arrEjercicio[arrEjercicio.length - 1];
console.log(arrSub2[arrSub2.length - 1]);
