class Person {

    name = '';
    surname = '';

    constructor(_name, _surname) {

        this.name = _name;
        this.surname = _surname;

    }

    speak() {
        return `Hello ! My name is ${this.name} ${this.surname}`;
    }

}

class Hero extends Person {

    clan = '';

    constructor(_name, _surname) {
        super(_name, _surname); // Hace referencia a las clase que extiende directamente. Se debe llamar al principio del constructor
        this.clan = 'Marvel 2';
    }

    myClan() {
        return `My clan is ${this.clan}`;
    }

    speak() {
        console.log(super.speak()); // Para utilizar el metodo de la clase hereadada
        return `Hello ! I'm part of the clan ${this.clan}`;
    }

}


const spidernMan = new Hero('Spidername', 'petter', 'Marvel');
console.log(spidernMan.speak());