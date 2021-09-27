const buttons = document.querySelectorAll('.pagination__page');

const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
  console.log(event);
};

[...buttons].forEach((el) => el.addEventListener('click', handleClick));
