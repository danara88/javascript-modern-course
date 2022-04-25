
/**
 * Estos objetos tienen las mismas propiedades.
 * Si cambio una propiedad, tengo que hacerlos a todos los objetos.
 */
const daniel = {
    name: 'Daniel',
    age: 21,
    imprimir() {
        console.log(`${ this.name }`);
    }
}

const pedro = {
    name: 'Pedro',
    age: 18
}

daniel.imprimir();

/**
 * Función para crear instanceas
 * Cualquier funcion que devulva nada, retorna undefined
 * El inveniente principal es la documentación para el equipo para crear clases de esta forma.
 */
function Persona(name, age) {

    this.name = name;
    this.age = age;

    this.imprimir = function imprimir() {
        console.log(`${ this.name }`);
    }

}

const maria = new Persona('María', 8);
maria.imprimir();