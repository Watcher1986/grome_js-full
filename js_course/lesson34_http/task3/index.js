const baseUrl = 'https://614785ed65467e0017384b96.mockapi.io/api/v1/users';

const emailInpElem = document.querySelector('#email');
const passwordInpElem = document.querySelector('#password');
const nameInpElem = document.querySelector('#name');
const errorElem = document.querySelector('.error-text');

const inputs = document.querySelectorAll('input');
const formElem = document.querySelector('.login-form');
const submitElem = document.querySelector('.submit-button');

const isAllValid = [];
const errMessage = 'Failed to create user';
const isEveryTrue = () => {
  if (
    emailInpElem.reportValidity() &&
    nameInpElem.reportValidity() &&
    passwordInpElem.reportValidity()
  ) {
    submitElem.removeAttribute('disabled');
  }
};

const clearForm = () => {
  inputs.forEach((input) => (input.value = ''));
  console.log(inputs);
};

const onEmailChange = () => {
  isEveryTrue();
  errorElem.innerHTML = '';
};

const onUserNameChange = () => {
  isEveryTrue();
  errorElem.innerHTML = '';
};

const onPasswordChange = () => {
  isEveryTrue();
  errorElem.innerHTML = '';
};

const getFormData = () => fetch(baseUrl).then((response) => response.json());

const createFormData = (formData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  });

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  createFormData(formData)
    .then(() => getFormData())
    .then((response) => {
      if (typeof response !== 'string') {
        alert(JSON.stringify(response));
        return clearForm();
      }
      return Promise.reject(response);
    })
    .catch((err) => {
      console.log(err);
      errorElem.innerHTML = errMessage;
    });
};

emailInpElem.addEventListener('input', onEmailChange);
nameInpElem.addEventListener('input', onUserNameChange);
passwordInpElem.addEventListener('input', onPasswordChange);
formElem.addEventListener('submit', onFormSubmit);
