const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo' && 150; // 150; el último valor es el que se le asigna a la variable
const a2 = 'Hola' && 'Mundo'; // Mundo
const a3 = soyFalso || 'Ya no soy falso'; // Como la primera condición es false, nos pasamos a la otra condición y la devolvemos
const a4 = soyFalso || soyUndefined || soyUndefined || 'Ya no soy falso de nuevo'; // Llega hasta el último valor
const a5 = soyFalso || soyUndefined || soyUndefined || true || 'Ya no soy falso de nuevo';

console.log({a1, a2, a3, a4, a5});