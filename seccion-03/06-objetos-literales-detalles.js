// https://developer.mozilla.org/es/docs/web/javascript/reference/global_objects/object
// Si quiero bloquear asignaciones a mi objeto solo es cuestión de cambiar a "const"
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

// Método para borrar una propiedad
delete personaje.name;

// Método para trabajar el objeto como un arreglo
const entriesPares = Object.entries(personaje);

// Método para crear una propiedad en el objeto
personaje.casado = true;

// Método para bloquear modificaciones a las propiedades DIRECTAS del objeto
Object.freeze(personaje); Object.freeze(personaje.direccion);

// Método para traer el nombre de las propiedades del objeto
const propiedades = Object.getOwnPropertyNames(personaje);

// Método para traer el nombre de los valores del objeto
const valores = Object.values(personaje);

console.log(valores);


