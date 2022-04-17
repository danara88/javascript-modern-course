let juegos = ['Call of duty', 'Mario Bros', 'Halo 3'];

// Propiedad para ver la longitud de un arreglo
console.log('Length: ', juegos.length);

// Método para recorrer cada item del arreglo
juegos.forEach((item, index, arr) => console.log({item, index, arr}));

// Método para insertar un nuevo elemento al final del arreglo
let nuevaLongitud = juegos.push('Guitar Hero');

// Método para insertar un nuevo elemento al principio
juegos.unshift('Harry Poter Lego');

// Método para eliminar el último elemento de un arreglo
let juegoBorrado = juegos.pop();

// Método para borrar un elemento en un lugar en específico
let index = 2;
let nuevoArr = juegos.splice(index, 1);

// Método para encontrar el indice de un elemento
// JavaScript es case sencitive
let haloIndex = juegos.indexOf('Halo 3');
console.log(haloIndex);

console.log(juegos);