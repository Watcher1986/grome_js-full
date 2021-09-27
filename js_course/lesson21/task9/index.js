function finishForm() {
  const formElem = document.querySelector('.login-form');
  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'name');
  inputElem.type = 'text';
  inputElem.name = 'login';
  formElem.prepend(inputElem);
  const passwordInp = document.querySelector("[name='password'");
  passwordInp.setAttribute('type', 'password');
}

finishForm();
