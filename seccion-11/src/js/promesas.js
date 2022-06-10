const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones',
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Mucho dinero',
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Reaccion a las picaduras',
    },
};

export const buscarHeroe = (id) => {
    const heroe = heroes[id];
    return new Promise((resolve, reject) => {
        if (!heroe) reject(`No existe el heroe con ID ${id}`);
        resolve(heroe);
    });
};

/**
 * Una funcion async retorna una promesa
 * @param {} id
 * @returns
 */
export const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];
    if (!heroe) throw `No existe el heroe con ID ${id}`;
    return heroe;
};

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 4000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 2000);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rapida'), 1000);
});

export { promesaLenta, promesaMedia, promesaRapida };
