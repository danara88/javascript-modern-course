import { buscarHeroe, buscarHeroeAsync } from './promesas';

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(buscarHeroe);

/**
 * Usar de manera sabia el await dentro de un ciclo for
 * en cambio mejor acumular las promesas en una variable
 * y resolverlas al final con el Promise.all
 * @returns
 */
// export const obtenerHeroesArr = async () => {
//     let heroesArr = [];

//     for (const heroeId of heroesIds) {
//         // El await va esperar a que esa promesa se resuelva
//         let heroe = buscarHeroe(heroeId);
//         heroesArr.push(heroe);
//     }

//     return await Promise.all(heroesArr);
// };

export const obtenerHeroesArr = async () => {
    return await Promise.all(heroesIds.map(buscarHeroe));
};

// Manejo de errores
export const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (err) {
        console.log('Catch !', err);
        throw err;
        return {
            poder: 'Sin poder',
            nombre: 'Sin nombre',
        };
    }
};

/**
 * Uso del for await
 */
export const heroesCiclo = async () => {
    console.time('Ciclotime');

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach((heroe) => console.log(heroe));

    for await (const heroe of heroesPromesas) {
        console.log(heroe);
    }

    console.timeEnd('Ciclotime');
};

/**
 * Uso del if await
 */
export const heroeIfAwait = async (id) => {
    if ((await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Es el mejor de todos.');
    } else {
        console.log('naah');
    }
};
