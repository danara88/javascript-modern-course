import './styles.css';
import { buscarHeroe } from './js/callbacks';
import { buscarHeroe as buscarHeroePromise } from './js/promesas';

const heroeId = 'capi';

const heroe1 = 'capi';
const heroe2 = 'ironssd';

/**
 * Callbacks:
 * Es una función adicional donde podemos mandarlo como argumento.
 * Es una función que es enviada como un argumento.
 * JS lo creo para llevar acabo procesos/peticiones que se llevan a destiempo
 * Los callbacks se ejecutan en el mismo hilo (Secuencialmente)
 * Siempre el primer argumento de un callback es un error
 */
console.log('Callback: ');
buscarHeroe(heroeId, (err, heroe) => {
    if (err) {
        console.error(err);
    } else {
        console.log(heroe);
    }
});

/**
 * Qué es una promesa ?
 * Una promesa es un acuerdo entre dos partes de una de ellas se compromete a realziar algo ante el cumplimiento de una condición.
 * Después notificar si somos capaces de cumpler la promesa o no.
 * Las promesas pasan a otro plano previniendo que se bloque el codigo de javascript.
 * Los callbacks pueden bloquear el codigo del programa.
 */
console.log('Promise: ');
buscarHeroePromise(heroeId).then((heroe1) => {
    console.log(heroe1);
});

/** El catch se dispra en el primero error que se da, y las demas promesas no se llevaran acabo. */
console.log('Promise All: ');
Promise.all([buscarHeroePromise(heroe1), buscarHeroePromise(heroe2)])
    .then(([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre}`);
    })
    .catch((err) => {
        alert(err);
    })
    .finally(() => {
        console.log('Se termino el promise all');
    });
