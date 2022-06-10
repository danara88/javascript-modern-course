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

export const buscarHeroe = (id, callback) => {
  const heroe = heroes[id];

  if (heroe) return callback(null, heroe);

  callback(`No existe el heroe con ID ${id}`);
};
