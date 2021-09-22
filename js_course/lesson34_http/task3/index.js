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
const isEveryTrue = () =>
  isAllValid.every((el) => el === true) && isAllValid.length >= 3;

const clearForm = () => {
  inputs.forEach((input) => (input.value = ''));
  console.log(inputs);
};

const onFormChange = () => {
  submitElem.disabled =
    !inputs.every((input) => input.reportValidity()) && inputs.length >= 3;
  errorElem.innerHTML = '';
};

const onEmailChange = () => {
  if (!emailInpElem.reportValidity()) {
    return;
  }
  isAllValid.push(true);
  submitElem.disabled = !isEveryTrue();
  errorElem.innerHTML = '';
};

const onUserNameChange = () => {
  if (!nameInpElem.reportValidity()) {
    return;
  }
  isAllValid.push(true);
  submitElem.disabled = !isEveryTrue();
  errorElem.innerHTML = '';
};

const onPasswordChange = () => {
  if (!passwordInpElem.reportValidity()) {
    return;
  }
  isAllValid.push(true);
  submitElem.disabled = !isEveryTrue();
  errorElem.innerHTML = '';
};

const getFormData = () => fetch(baseUrl).then((response) => response.json());

const createFormData = (taskData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
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
        submitElem.disabled = true;
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
