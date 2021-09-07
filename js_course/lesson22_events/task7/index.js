const btnElems = document.querySelectorAll('.btn');
console.log([...btnElems]);

function handleClick(event) {
  console.log(event.target.textContent);
}

[...btnElems].forEach((el) => el.addEventListener('click', handleClick));
