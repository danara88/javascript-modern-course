/**
 * Prototype: Es el ADN que tienen los objetos en JS
 * Las clases estáticas nos permiten acceder a sus métodos y propiedades
 * sin necesidad de instanciar las clase.
 * Se recomienda poner los estáticos en las primeras lineas de las clase
 */

class Item {

    static _count = 0; // Propiedad estática

    static get counter() {
        return Item._count + ' instancias';
    }
    
    static message(message = '') {
        console.log(message);
    }

    constructor(_name = 'NA', _description = 'NA') {
        this.name = _name;
        this.description = _description;

        Item._count++;
    }


}

const milk = new Item('Milk', 'This is a super market item');
const cockie = new Item('Cockie', 'This is considered a food');
const egg = new Item('Egg', 'Healthy breakfast');
const bread = new Item('Bread', 'Supermarket item');

console.log('Conteo estático: ', Item._count);
console.log(Item.counter);
console.log(Item.message('My message'));