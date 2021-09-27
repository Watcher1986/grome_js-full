const inputElem = document.querySelector('.search__input');
const butElem = document.querySelector('.search__btn');

const logInp = () => {
  console.log(inputElem.value);
};

butElem.addEventListener('click', logInp);
