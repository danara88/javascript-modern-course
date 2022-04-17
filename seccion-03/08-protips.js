// Desde el ECMAScript 6, si el nombre de la propiedad de un obj literal es el mismo, podemos escribir solo 1 vez la propiedad
function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}

// Cuando queremos retornar un obj. literal es una funcion flecha, debemos encerrar en parentesis.
const crearPersona2 = (nombre, apellido) => ({nombre, apellido});
const persona = crearPersona2('Daniel', 'Aranda');

// En una función tradicional si podemos acceder a la propiedad arguments
function imprimeArgumentos () {
    console.log(arguments);
}

// En una función de flecha no esta la propiedad "arguments"
// Para recuperar los argumentos puedo usar el parametro "rest ..."
// Después del parametro rest no podemos poner más parametros, pero antes si se puede
const imprimeArgumentos2 = ( name, ...args ) => {
    // console.log(args);
    return args;
}

// Como retorna un arreglo, podemos crear las variables correspondientes
const [apellido, ano, vivo] = imprimeArgumentos2('Daniel', 'Aranda', 2000, true);
console.log({apellido, ano, vivo});

// Puedo recuperar en una variable el parámetro que yo quiera
const { nombre: nuevoNombre } = crearPersona2('Fernando', 'Herrera');
console.log(nuevoNombre);

// Destructuración de argumentos
let personaje = {
    name: 'Daniel Aranda',
    age: 21,
    birthday: '2022-09-11',
    isDeleted: false,
    trajes: ['Mark I', 'Mark II'],
};
const imprimePropiedades = ({ name, age = 0, isDeleted }) => console.table({name, age, isDeleted});

imprimePropiedades(personaje);
