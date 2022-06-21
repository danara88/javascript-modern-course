const URL = 'https://reqres.in/api/users/';

const getUser = async (id) => {
    const resp = await fetch(`${URL}${id}`);
    const { data } = await resp.json();
    return data;
};

const createUser = async (user) => {
    const resp = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json',
        },
    });

    return await resp.json();
};

const updateUser = async (id, user) => {
    const resp = await fetch(`${URL}${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json',
        },
    });
    return await resp.json();
};

const deleteUser = async (id) => {
    const resp = await fetch(`${URL}${id}`, {
        method: 'DELETE',
    });
    return resp.ok ? 'Deleted' : 'Something went wrong';
};

export { getUser, createUser, updateUser, deleteUser };
