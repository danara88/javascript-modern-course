import { getJoke } from './http-provider';

const body = document.body;

// References
let btnLoadOtherJoke, olList; // Definirlas una vez que el html haya cargado

/**
 * Method to create the HTML
 */
const createHTML = () => {
    const html = `
        <h1 class="mt-5">Jokes</h1>
        <hr />

        <button class="btn btn-primary">Load other joke</button>

        <ol class="mt-2 list-group">
        </ol>
    `;
    const divJokes = document.createElement('div');
    divJokes.innerHTML = html;

    body.append(divJokes);
};

/**
 * Method to trigger events
 */
const events = () => {
    olList = document.querySelector('ol');
    btnLoadOtherJoke = document.querySelector('button');

    btnLoadOtherJoke.addEventListener('click', async () => {
        try {
            btnLoadOtherJoke.disabled = true;
            printJoke(await getJoke());
            btnLoadOtherJoke.disabled = false;
        } catch (err) {
            console.log(err);
        }
    });
};

/**
 * Method to print a joke
 * @param {*} joke
 */
const printJoke = (joke) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${joke.id}</b>: ${joke.value}`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);
};

/**
 * Method to initialize methods
 */
export const init = () => {
    createHTML();
    events();
};
