const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');
// ф-ия - генератор ошибки (если введено значение возвращает  андефайнд , если введено - строка с ошибкой)
const isRequired = (value) => (value ? undefined : 'Required');
// ф-ия - генератор ошибки (тот же смысл , толко проверка на определённый символ)
const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';
// объект с полями и определёнными валидаторами к ним
const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};
// ф-ия валидатор записывающая текст ошибки в определённое поле , возвращает строковое представление ошибки
const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errortext) => errortext)
    .join(', ');
};
// ф-ия handler на событии передаёт строку ошибки связаному дом элементу при взамодействии с полем email при не валидном заполнении, или записывает значени в определённое поле
const onEmailChange = (event) => {
  const errorText = validate('email', event.target.value);
  emailErrorElem.textContent = errorText;
};
// ф-ия handler на событии передаёт строку ошибки связаному дом элементу при взамодействии с полем password при не валидном заполнении, или записывает значени в определённое поле
const onPasswordChange = (event) => {
  const errorText = validate('password', event.target.value);
  passwordErrorElem.textContent = errorText;
};

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  console.log(formData);
  alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onFormSubmit);
