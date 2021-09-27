const inpElem = document.querySelector('.text-input');

const logValue = () => {
  console.log(inpElem.value);
};

inpElem.addEventListener('change', logValue);
