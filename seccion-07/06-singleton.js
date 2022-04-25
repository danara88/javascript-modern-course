/**
 * Qué es el patrón Singleton?
 * Es un patron creacional
 * Es una instancia única de mi clase.
 * Un instancia de manera global para toda mi aplicación.
 * Siempre retorno la misma instancia, que sin importar cuantos new haga, siempre retorno la misma instancia
 * Nos ayuda ahorrar memoria ya que todas las instancias apuntan al mismo espacio en memoria    
 */

class MySingleton {

    static instancia;
    nombre = '';

    constructor(nombre = '') {
        // Si ya existe una instancia
        if(!!MySingleton.instancia) {
            return MySingleton.instancia;
        }

        MySingleton.instancia = this; // Hacer referencia a esta instancia de la clase
        this.nombre = nombre;

        // return this; Lo retorna automáticamente
    }


}


const instancia1 = new MySingleton('ironman'); // Debe regresar esta misma instancia
const instancia2 = new MySingleton('spiderman');



console.log('Nombre en la instancia 2 es: ' + instancia2.nombre);