import { heroeIfAwait, heroesCiclo, obtenerHeroeAwait, obtenerHeroesArr } from './js/await';
import { buscarHeroe, buscarHeroeAsync, promesaLenta, promesaMedia, promesaRapida } from './js/promesas';

/**
 * Promise.race
 * Nos permite ejecutar las promesas en conjunto y obtener el msj
 * de la promesa que se resuelva mas rapida.
 */

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Ejecuta primera la rapida y las demas no.
// Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(console.log).catch(console.warn);

/**
 * Probando funcionalidad async
 */

// Funcion de promesa
// buscarHeroe('capi2')
//     .then((resp) => console.log(resp))
//     .catch(console.warn);

// Funcion async
// buscarHeroeAsync('iron2')
//     .then((resp) => console.log(resp))
//     .catch(console.warn);

// obtenerHeroesArr().then(console.log);

// obtenerHeroeAwait('capi2').then(console.log).catch(console.warn);

heroesCiclo();

heroeIfAwait('iron');
