const inputElem = document.querySelector('.task-status');

const ifChecked = (event) => {
  console.log(event.target.checked);
};

inputElem.addEventListener('change', ifChecked);
