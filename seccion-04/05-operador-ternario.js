/**
 * Ejemplo:
 * Días de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

const dia = 0; // 0 -> Domingo
const horaActual = 8;

let horaAbertura;
let mensaje; // Abierto o cerrado

horaAbertura = [0,6].includes(dia) ? 9 : 11;

mensaje = horaActual >= horaAbertura ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${ horaAbertura }`;

console.log(mensaje);