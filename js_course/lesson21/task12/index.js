function getSection(num) {
  return document.querySelector(`span[data-number="${num}"]`).parentElement
    .dataset.section;
}

getSection(3);
