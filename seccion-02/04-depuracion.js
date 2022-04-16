// La depuración del código del archivo JS la encontramos asi:
// inspector de codigo > Sources
// La depuración tambien puede hacerse desde VScode utilizando NodeJs como debugger

let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;

console.log(a, b, c);

/**
 * NOTA:
 * Cuando JavaScript abre el archivo hace un barrido rápido de todo donde están las variables 
 * y las funciones definidas; y luego ejecuta linea por linea; es por ello que al hacer debug del
 * código vemos que hay "undefined" en algunos variables debido a esta barrida tan rápida.
 */