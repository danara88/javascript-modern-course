const carros = ['Ford', 'Toyota', 'Honda'];

// WHILE
// false, null, undefined no ejecutan el while
let i = 0;
while (i < carros.length) {
    if (i === 1) {
        i++;
        continue;
    }

    console.log(carros[i]);
    i++;
}

// DO WHILE
// El do while por lo menos ejecuta el bloque interno 1 sola vez
console.log('DO WHILE: ');
let j = 0;
do {
    console.log(carros[j]);
    j++;
} while( carros[j] );