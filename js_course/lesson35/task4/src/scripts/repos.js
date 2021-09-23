const repolistElem = document.querySelector('.repo-list');

// const createRepoItem = ({ name }) => {
//   const listItemElem = document.createElement('li');
//   listItemElem.classList.add('repo-list__item');
//   listItemElem.textContent = name;
//   return listItemElem;
// };

export const cleanReposList = () => {
  repolistElem.innerHTML = '';
};

export const renderReposNames = (reposNames) => {
  const reposElems = reposNames.map(({ name }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('repo-list__item');
    listItemElem.textContent = name;

    return listItemElem;
  });
  cleanReposList();
  repolistElem.append(...reposElems);
};
