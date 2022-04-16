let x = 10;
let y = 20;
let z = 30;

// Mensajes en consola
console.log(x);
console.warn(x);
console.error(x);

// El método log() puede recibir varios parametros
console.log('1. ', x);
console.log('2. ', x);
console.log('3. ', x);

// Podemos cambiar el estilo del console
console.log('%c Mis variables', 'color: blue; font-weight: bold');

// Podemos crear una tabla
console.table({x, y, z});