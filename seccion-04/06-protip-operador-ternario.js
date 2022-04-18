// Manera simplificada de usar el ternario en una función flecha al retornar un valor
const elMayor = (a, b) => (a > b) ? a : b;
const tieneMembresia = (miembro) => (miembro) ? '2.00' : '10.00';

const amigo = true;
const amigosArr = [
    'Daniel',
    'Javier',
    amigo ? 'Thor' : 'Loki',
    elMayor(3, 4)
];

const nota = 91;

const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              'F';

console.log(grado);

