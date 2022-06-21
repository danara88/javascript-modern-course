import { uploadImage } from './http-provider';

const body = document.body;
let pictureBox, inputFile;

const createInputFileHTML = () => {
    const html = `
        <h1>Upload file</h1>
        <hr>
        <label>Select a picture</label>
        <input type="file" accept="image/png, image/jpg, image/jpeg"/>
        <br/>
        <img id="picture" class="img-thumbnail" src=""/>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    pictureBox = document.querySelector('#picture');
};

const events = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        uploadImage(file).then((url) => (pictureBox.src = url));
    });
};

export const init = () => {
    createInputFileHTML();
    events();
};
