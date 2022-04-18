console.warn('Not o la negacion');
console.log(true); // true
console.log(!true); // false
console.log(!false) // true

console.warn('And');
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

const regresaFalse = () => {
    console.log('Regresa falso');
    return false;
}

const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

// JS al ver que la primera condición regresa falso, no va a ejeuctar los demás condiciones.
// Ejecutará la funcion regresaFalse().
console.log(regresaFalse() && regresaTrue()); // false

// Ejecutará los dos console logs
console.log(regresaTrue() && regresaFalse()); // false
regresaFalse() && regresaTrue();

console.warn('OR');
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false