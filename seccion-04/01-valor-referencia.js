/**
 * Cuando trabajamos con primitivos, cualquier tipo de asignación o cuando la mandamos a una función como argumento,
 * estamos mandando por valor (No importa si transformamos la variable, no estamos afectando el mismo lugar en memoria)
 * 
 * TODOS LOS PRIMITIVOS SE PASAN POR VALOR
 * 
 */

let a = 10;
let b = a; // 10
a = 30; // 30

console.log({a,b});

/**
 * En JS todos los objetos son pasados por referencia
 * 
 * TODOS LOS OBJETOS SON PASADOS POR REFERENCIA
 * 
 */
let juan = { name: 'Juan' };
let ana = juan; // Apuntamos al mismo espacio de memoria donde se localiza el objeto
ana.name = 'Ana';

console.log({juan, ana});

/**
 * Cualquier modificación que hacemos al argumento, pasa por referencia
 * @param {*} persona 
 * @returns 
 */
const cambiarNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre( peter );

console.log({ peter, tony });

/**
 * Como romper la referencia ?
 */

let juan2 = { nombre: 'Juan' };
let ana2 = { ...juan }; // Usando el operador spread rompemos la referencia
ana2.nombre = 'Ana';
console.log({ juan2, ana2 });

const cambiarNombre2 = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

/**
 * Operador REST ... vs Operador Spread ...
 * REST: Este operador es cuando se usa en los parametros de una función uniendo todos los argumentos en una sola variable.
 * SPREAD: Cuando lo utilzamos fuera de un parametro de una función y significa separar todos los elementos.
 */

// Arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

const otrasFrutas = [...frutas]; // Romper la referencia

otrasFrutas.push('Sandia');

console.table({frutas, otrasFrutas});