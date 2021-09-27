// requesUserData

const requestUserData = (userId) => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User is not found'));
      }, 500);
    }
    setTimeout(() => {
      resolve({
        name: 'John',
        age: 17,
        email: `${userId}`,
        userId,
      });
    }, 1000);
  });
  return request;
};

// requestUserData('user-1').then((data) => console.log(data));
requestUserData('broken')
  .catch((data) => {
    console.log(data);
    throw new Error('Error');
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log('at last'));
// requestUserData('broken-1').then((data) => console.log(data));
