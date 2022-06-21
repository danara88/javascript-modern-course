// import { init } from './js/jokes-page';

import { createUser, deleteUser, getUser, updateUser } from './js/crud.provider';
import { init } from './js/files-page';
import { getUsers } from './js/http-provider';

// init();

// getUsers().then(console.log);

// init();

// getUser(2).then(console.log);

// createUser({ name: 'Daniel Aranda', job: 'Ingeniero' }).then(console.log);

updateUser(2, { name: 'Javier', job: 'Developer' }).then(console.log);

deleteUser(2).then(console.log);

init();
