import '../css/componentes.css';

export const saludar = (nombre) => {
    const h1 = document.createElement('h1');
    
    h1.innerText = `Hello !! ${nombre}`;

    document.body.append(h1);

    // const img = document.createElement('img');

    // img.src = logo;

    // document.body.append(img);
}