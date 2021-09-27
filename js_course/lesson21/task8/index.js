function finishList() {
  const listItems = document.querySelector('.list');
  const listItem1 = document.createElement('li');
  listItem1.textContent = '1';
  listItems.prepend(listItem1);
  const listItem5 = document.querySelector('.special');
  const listItem4 = document.createElement('li');
  listItem4.textContent = '4';
  listItem5.before(listItem4);
  const listItem6 = document.createElement('li');
  listItem6.textContent = '6';
  listItem5.after(listItem6);
  const listItem8 = document.createElement('li');
  listItem8.textContent = '8';
  listItems.append(listItem8);
}

finishList();
