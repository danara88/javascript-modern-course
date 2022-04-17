/**
 * JS es un lenguaje debilmente tipado: Nosotros explicitamente no le decimos a JS que tipo de dato es una
 * variable o que tipo retorna una función.
 * 
 * ¿Qué es el tipo de dato de una variable?
 * Describe el contenido del valor que tiene la variable
 * 
 * ¿Qué son los primitivos?
 * Es una información que NO es un objeto y son inmutables. Hay 6 tipos:
 * - Boolean - true/false
 * - Null - Sin valor en lo absoluto
 * - Undefined - Hay una variable declarada que aún no se le asigna un valor
 * - Number - Integers, floats, etc
 * - String - Cadena de caracteres
 * - Symbol - Es un valor único que no es igual a ningún otro valor
 */

/**
 * NOTA:
 * EN JAVASCRIPT TODO SON OBJETOS EXCEPTO LOS PRIMITIVOS
 */

// STRING
let name = 'Peter Parker'; // La comilla doble es más pesada que la comilla sencilla

// BOOLEAN
let isMarvel = true;

// NUMBER
let age = 21;
age = 21.282828; // Sigue siendo de tipo Number

// UNDEFINED
let superPoder;
console.log(superPoder);

// NULL
let soyNull = null;
console.log(soyNull);

// SYMBOL
// Permiten crear identificadores únicos
 let x = Symbol();
 let y = Symbol();
 console.log(x === y); // false

 