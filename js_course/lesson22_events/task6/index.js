const singBtn = document.querySelector('.single-use-btn');
const singleAction = () => {
  console.log('clicked');
  singBtn.removeEventListener('click', singleAction);
};

singBtn.addEventListener('click', singleAction);
