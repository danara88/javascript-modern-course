const heroes = ['Batman', 'Mujer Maravilla', 'Aquaman'];

// FOR tradicional
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// FOR In
for (let i in heroes) {
    console.log(heroes[i]);
}

// FOR Of
// Extraer el valor de cada posición del arreglo
for (let heroe of heroes) {
    console.log(heroe);
}