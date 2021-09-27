const baseUrl = 'https://614785ed65467e0017384b96.mockapi.io/api/v1/users';

function getUsersList() {
  return fetch(baseUrl).then((responce) => responce.json());
}

function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`).then((responce) => responce.json());
}

function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });
}

function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

// // examples
// getUsersList().then((users) => {
//   console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

getUserById('2').then((userData) => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

// const newUserData = {
//   email: 'verycool@email.com',
//   firstName: 'NotIron',
//   lastName: 'Girl',
//   age: 19,
// };

// createUser(newUserData).then(() => {
//   console.log('User created');
// });

getUsersList().then((users) => {
  console.log(users);
});

const updatedUserData = {
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};

// updateUser('1', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('1').then(() => {
//   console.log('User updated');
// });

getUsersList().then((users) => {
  console.log(users);
});
