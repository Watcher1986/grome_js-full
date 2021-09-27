const inpElem = document.querySelector('.text-input');

function logText(event) {
  console.log(event.target.value);
  console.log(event.target);
}

inpElem.addEventListener('change', logText);
