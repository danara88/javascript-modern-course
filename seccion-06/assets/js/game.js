// Función anónima autoinvocada
const myModule = (() => {
    // El nuevo scope va aquí ...
    'use strict'; // Se estricto al momento de evaluar mi código


    let deck       = [];
    const types    = ['C', 'D', 'H', 'S'],
          specials = ['A', 'J', 'Q', 'K'];

    let playersPoints = [];

    // HTML references
    const btnAskForCard     = document.querySelector('#askForCardBtn'),
          btnFinish         = document.querySelector('#finishBtn'),
          btnNewGame        = document.querySelector('#newGameBtn'),
          smallTagsPoints   = document.querySelectorAll('small'),
          divPlayersCards   = document.querySelectorAll('.divCards');

    /**
     * Method to initialize the game
     * @returns 
     */
    const initGame = (numPlayers = 1) => {
        deck = createDeck();

        playersPoints = [];
        for (let i = 0; i <= numPlayers; i++) {
            playersPoints.push(0); // The last index is the computer
        }

        btnAskForCard.disabled = false;
        btnFinish.disabled = false;

        divPlayersCards.forEach(item => item.innerHTML = '');

        smallTagsPoints.forEach(item => item.innerText = 0);
    }
    
    /**
     * Method to create the deck
     */
    const createDeck = () => {
        deck = [];

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

        return _.shuffle(deck);
    }

    /**
     * Method to ask for a card
     * @returns  
     */
    const askForCard = () => {
        if (deck.length === 0) throw 'No more cards in the deck.';
        return deck.pop();
    };

    /**
     * Method to get the card value
     * @param {*} card 
     * @returns 
     */
    const cardValue = (card) => {
        const valueCard = card.substring(0, card.length - 1);
        return (isNaN(valueCard) ? 
                valueCard === 'A' ? 11 : 10 :
                Number(valueCard));
    }

    /**
     * Method to create a card
     * @param {*} turn 
     * @param {*} card 
     */
    const createCard = (turn, card) => {
        const imgElement = document.createElement('img');
        imgElement.src = `./assets/cards/${ card }.png`;
        imgElement.classList.add('card');
        divPlayersCards[turn].append(imgElement);
    }

    /**
     * Method to get the winner
     */
    const getWinner = () => {

        const [minimumPoints, botPoints] = playersPoints;
        
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

    /**
     * Method to acumulate player points
     * @param {*} turn 
     * @param {*} valueOfCard 
     * @returns 
     */
    const acumulatePoints = (turn, valueOfCard) => {
        playersPoints[turn] += cardValue(valueOfCard);
        smallTagsPoints[turn].innerText = playersPoints[turn];

        return playersPoints[turn];
    }

    /**
     * Method to execute the machine turn
     * @param {*} minimumPoints 
     */
    const botTurn = (minimumPoints) => {
        let botPoints = 0;
        do {
            const card = askForCard();
            botPoints = acumulatePoints(playersPoints.length - 1, card);

            createCard(playersPoints.length - 1, card);

        } while (botPoints < minimumPoints && minimumPoints <= 21);

        getWinner();

    }



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
        const card = askForCard();
        const playerPoints = acumulatePoints(0, card);

        createCard(0, card);

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
        botTurn(playersPoints[0]);
    });

    /**
     * Event click to start a new game
     */
    btnNewGame.addEventListener('click', () => {
        initGame();
    });

    // Si retornamos algo aqui, será público y lo demás privado
    return {
        startGane: initGame
    };

})();


