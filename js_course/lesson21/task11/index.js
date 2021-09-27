function squaredNumbers() {
  [...document.querySelectorAll('.number')].forEach((li) => {
    li.dataset.squaredNumber = li.dataset.number ** 2;
  });
}

squaredNumbers();
