// Variable: Es un contenedor de información que apunta a un lugar en memoria el cual puede cambiar. Cualquier
// variable que no este inicializada tendrá el valor de "undefined"
// Constante: No puede cambiar su valor (reasiganrse). Estas no tienen propiedades para establecer o 
// cambiar su valor, lo cual lo hace más ligera que una variable con Let o con Var.

let   a = 10; 
var   b = 20;
const c = 30; // Hace referencia a un valor de memoria y no puede cambiar (no puede reasignarse)
let d = 1, 
    e = 2, 
    f = 3, 
    g = 4,
    z = d + e;

console.log(z);

// Puedes acceder a las variables desde el inspector ya que estan alojadas en el objeto "Window"

/*
 * NOTA 1:
 * Siempre debemos inicializar las variables con let o var.
 * En una constante, es necesario inicializarla especificando su valor debido a que 
 * no puede cambiar en el futuro.
*/

/**
 * NOTA 2:
 * Al utilizar la palabra reservada var, esta variabe queda en el objeto global llamada "Window",
 * lo cual no es buena practica por que al ejecutar el comando "window" en el inspector de código
 * podemos ver que la variable es visible.
 */

/**
 * NOTA 3:
 * Principales problemas con "Var"
 * 1. Me permite remplazar propiedades y objetos propios del objeto global "Window"
 * 2. Como JS hace un barrido rápido del código, puedo definir y declarar una variable después de utilizarla
 * poniendole el valor de "undefined" (no definido) (no arroja ningpun error)
 * 3. Usando Var podemos re inicializar la variable, algo que no se puede usar con let
 */