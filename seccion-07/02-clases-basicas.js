/**
 * Las clases ya tienen de manera por default el 'use strict' por dentro.
 * Desventajas:
 * 1. Si asignamos a la instancia una propiedad, JS lo va aceptar correctamente
 * 2. No hay propiedades privadas
 */

class Persona {
    
    // nombre;
    // apellido;
    // frase;
    comida = '';

    constructor(_nombre = 'Sin nombre', _apellido = 'Sin apellido', _frase = 'Sin frase') {

        this.nombre = _nombre;
        this.apellido = _apellido;
        this.frase = _frase;

    }

    set setComidaFavorita(comida) {
        this.comida = comida;
    }

    get getComidadFavorita() {
        return `La comida de ${ this.nombre } es ${ this.comida }`;
    }

    queinSoy() {
        console.log(`Soy ${this.nombre}`);
    }

}

/**
 * Si no mandamos ningun argumento a las instancias, JS por default 
 * les asigna undefined a las propiedades.
 */
const gerente = new Persona('Daniel', 'Aranda', 'Hello !');

gerente.queinSoy();

gerente.setComidaFavorita = 'Pizza';

console.log(gerente.getComidadFavorita);

console.log(gerente);