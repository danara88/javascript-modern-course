// Logica para centralizar las peticiones

const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usersUrl = 'https://reqres.in/api/users';

// Cloudinary
const cloudPreset = 'tqekjcjo';
const cloudUrl = 'https://api.cloudinary.com/v1_1/danielaranda/upload';

// fetch(jokeUrl).then((resp) => {
//     // Le deicmos a la respuesta que extraiga el body en formato json
//     resp.json().then(({ id, value }) => {
//         console.log(id, value);
//     });
// });

// fetch(jokeUrl)
//     .then((resp) => resp.json())
//     .then(({ value }) => console.log(value));

const getJoke = async () => {
    try {
        const resp = await fetch(jokeUrl);

        if (!resp.ok) throw 'Something went wrong';

        const { icon_url, id, value } = await resp.json();

        return { icon_url, id, value };
    } catch (err) {
        throw err;
    }
};

const getUsers = async () => {
    try {
        const resp = await fetch(usersUrl);

        const { data: users } = await resp.json();

        return users;
    } catch (err) {
        throw err;
    }
};

const uploadImage = async (uploadedFile) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', uploadedFile);
    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
        });
        if (resp.ok) return (await resp.json()).secure_url;
        throw await resp.json(); // Esto dispara el catch
    } catch (err) {
        throw err;
    }
};

export { getJoke, getUsers, uploadImage };
