const checkboxElem = document.querySelector('.task-status');

const logStatus = () => {
  console.log(checkboxElem.checked);
};

checkboxElem.addEventListener('change', logStatus);
