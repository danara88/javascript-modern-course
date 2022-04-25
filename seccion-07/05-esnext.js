/**
 * Implementación de propiedades privadas
 */
class Rectangulo {
    #area = 0; // Propiedad privada

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
        this.#area = this.base * this.altura;
    }


    get getArea() {
        return this.#area;
    }

    
}


const rectangulo = new Rectangulo(2,2);

console.log(rectangulo.getArea);