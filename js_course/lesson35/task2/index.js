// fetch('https://example.com');

const successRequest = Promise.resolve({ name: 'Tom' });

successRequest
  .then((data) => {
    console.log(data);
    throw new Error('Unexpected error');
  })
  .catch((err) => {
    console.warn(err.message);
  });

const failedRequest = Promise.reject(new Error('Fail'));

failedRequest
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.warn(err.message);
    throw err; // same as return Promise.reject(err);
  })
  .then((data) => {
    console.log(data);
  });

window.addEventListener('unhandledrejection', function (e) {
  console.log(e.reason.message);
});

fetch('https://api.github.com/users/github')
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('No data');
  })
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
