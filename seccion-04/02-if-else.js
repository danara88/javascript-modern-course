let a = 5;

if (a > 10) {
    console.log('A es mayor a 10');
} else {
    console.log('A es menor a 10');
}

// Ejercicio: Sin usar if else o Switch, unicamente objetos
// dar el dia de la semana en cadena de texto
let day = 10;
const date = new Date();
let days = ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday'];
console.log(days[day] || 'Dia no definido');
