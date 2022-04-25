/**
 * CONSTRUCTORES MULTIPLES:
 * 
 * En otros lugares es permitido tener multiples constructores.
 * Ejecuta un constructor o el otro dependiendo de cuales son los argumentos pasados.
 * También llamado "Sobre carga de constructores"
 */

class Persona {

    static porObjeto({nombre, apellido, pais}) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Pais: ${this.pais}`);
    }
}


const nombre1 = 'Melissa',
      apellido1 = 'Flores',
      pais1 = 'Mexico';

const daniel = {
    nombre: 'Daniel',
    apellido: 'Aranda',
    pais: 'Mexico'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(daniel);

persona2.getInfo();