function setButton(buttonText) {
  const iAmBody = document.querySelector('body');
  iAmBody.innerHTML = `<button>${buttonText}</button>`;
}

setButton('this is button');
