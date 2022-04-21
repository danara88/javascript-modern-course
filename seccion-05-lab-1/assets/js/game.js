/**
 * Cards reference:
 * 
 * 2C = 2 de treboles
 * 2D = 2 de diamantes
 * 2H = 2 de corazones
 * 2S = 2 de espadas
 */

let deck       = [];
const types    = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

let playerPoints = 0;
let botPoints = 0;

// HTML references
const btnAskForCard = document.querySelector('#askForCardBtn');
const btnFinish = document.querySelector('#finishBtn');
const btnNewGame = document.querySelector('#newGameBtn');
const smallTagsPoints = document.querySelectorAll('small');
const playerCards = document.querySelector('#playerCards');
const botCards = document.querySelector('#botCards');

/**
 * Method to create the deck
 */
const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(`${ i }${ type  }`)
        }
    }

    for (let type of types) {
        for (let special of specials) {
            deck.push(`${ special }${ type  }`)
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

/**
 * Method to ask for a card
 * @returns  
 */
const askForCard = () => {
    if (deck.length === 0) throw 'No more cards in the deck.';

    const card = deck.pop();
    return card;
};

/**
 * Method to get the card value
 * @param {*} card 
 * @returns 
 */
const cardValue = (card) => {
    const valueCard = card.substring(0,card.length - 1);
     // is NaN = is not a number
    return (isNaN(valueCard) ? 
            valueCard === 'A' ? 11 : 10
            : Number(valueCard));
}

/**
 * Method to execute the machine turn
 * @param {*} minimumPoints 
 */
const botTurn = (minimumPoints) => {
    do {
        const card = askForCard();

        botPoints += cardValue(card);
        smallTagsPoints[1].innerText = botPoints;

        const imgElement = document.createElement('img');
        imgElement.src = `./assets/cards/${ card }.png`;
        imgElement.classList.add('card');
        botCards.append(imgElement);

        if (minimumPoints > 21) {
            break;
        }

    } while (botPoints < minimumPoints && minimumPoints <= 21);

    /**
     * JavaScript no es multihilo es por eso que tenemos que poner el
     * timeout para esperar que finalice el while y luego ejecutar
     * las alertas
     */
    setTimeout(() => {
        if (botPoints === minimumPoints) {
            alert('No one won.');
        } else if (minimumPoints > 21) {
            alert('The computer won !');
        } else if (botPoints > 21) {
            alert('The player won !!');
        } else {
            alert('The computer won !');
        }
    }, 100);

}


createDeck();


/**
 * Qué es el DOM ?
 * Document Object Model
 * Es un conjunto de objetos anidados para crear un documento HTML o
 * tener acceso dinamico a traves de programación a los elementos HTML
 * y manipularlos.
 * 
 * Html -> Objeto del DOM
 * Body -> Objeto del DOM
 * 
 * El DOM no existe en el servidor y solo funciona en la web
 * 
 * document.querySelector() Me permite recuperar el primer elemento que cumpla con lo específico
 * document.querySelectorAll() Me permite recuperar todos los elementos que cumplan con lo especificado
 * este regresa un NodeList.
 * 
 * El querySelector es más eficiente que el getElementById debido a que este último en un momento
 * llama el querySelector.
 * 
 * Cada vez que escribamos querySelector, JS barre el html hasta encontrar el resultado por eso
 * no es bueno llamarlo cada vez y mejor guardarla como una constante.
 */


// Eventos

/**
 * Event click to ask for a card
 */
btnAskForCard.addEventListener('click', () => {
    // Call back: Una función que se esta pasando como argumento
    const card = askForCard();

    playerPoints += cardValue(card);
    smallTagsPoints[0].innerText = playerPoints;

    const imgElement = document.createElement('img');
    imgElement.src = `./assets/cards/${ card }.png`;
    imgElement.classList.add('card');
    playerCards.append(imgElement);

    if ( playerPoints > 21 ) {
        console.warn('You have loose :(');
        btnAskForCard.disabled = true;
        btnFinish.disabled = true;
        botTurn(playerPoints);
    } else if (playerPoints === 21) {
        alert('You won !!');
        console.warn('You won !!');
        btnAskForCard.disabled = true;
        btnFinish.disabled = true;
    }
});

/**
 * Event click to finish the game
 */
btnFinish.addEventListener('click', () => {
    btnAskForCard.disabled = true;
    btnFinish.disabled = true;
    botTurn(playerPoints);
});

/**
 * Event click to start a new game
 */
btnNewGame.addEventListener('click', () => {
    console.clear();
    
    deck = [];
    createDeck();

    botPoints = 0;
    playerPoints = 0;

    btnAskForCard.disabled = false;
    btnFinish.disabled = false;

    playerCards.innerHTML = '';
    botCards.innerHTML = '';

    smallTagsPoints[0].innerText = playerPoints;
    smallTagsPoints[1].innerText = botPoints;
});

