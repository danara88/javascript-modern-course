import { getUsers } from './http-provider';

const body = document.body;
let tbody;
let i;

/**
 * Method to create the table HTML
 */
const createHTML = () => {
    const html = `
    <h1 class="mt-5"> Users</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Picture</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);

    tbody = document.querySelector('tbody');
};

/**
 * Method to create a user table row
 * @param {*} user
 */
const createUserRow = (user) => {
    i++;
    const html = `
        <td scope="col"> ${i}. </td>
        <td scope="col"> ${user.email} </td>
        <td scope="col"> ${user.first_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${user.avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tbody.append(tr);
};

/**
 * Method to print users in the table
 */
const printUsers = async () => {
    try {
        (await getUsers()).forEach(createUserRow);
    } catch (err) {
        console.log(err);
    }
};

/**
 * Method to initialize methods
 */
export const init = async () => {
    createHTML();
    i = 0;
    printUsers();
};
