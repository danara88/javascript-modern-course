/**
 * JavaScript tiene dos tipos de datos principales:
 * - Los primitivos
 * - Los objetos
 * 
 * Si no es un primitivo, es un objeto.
 * 
 * Los objetos literales son como los diccionarios en python.
 * Tienen pares de valores (Key - Value)
 */

// Esto es un objeto literal
// Finalizar con una coma en algunos lugares es considerado buena práctica
let personaje = {
    name: 'Daniel Aranda',
    age: 21,
    birthday: '2022-09-11',
    isDeleted: false,
    coords: {
        lat: 32.23,
        lng: 45.45
    },
    trajes: ['Mark I', 'Mark II'],
    direccion: {
        zip: '10920, 90205',
        ubicacion: 'Maliby, California'
    },
    'ultima-pelicula': 'Infinity War',
};

// Podemos acceder a una propiedad con punto
console.log(personaje.name);

// Podemos acceder a una propiedad con corchetes
console.log(personaje['name']);

// Ejercicio: Sacar el número de trajes del personaje
console.log(personaje.trajes.length);

// Ejercicio: Sacar el último traje
console.log(personaje.trajes[personaje.trajes.length - 1]);