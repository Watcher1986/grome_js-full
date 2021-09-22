const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const spinnerElem = document.querySelector('.spinner_hidden');
const repolistElem = document.querySelector('.repo-list');

let reposUrl;

const createRepoItem = ({ name }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('repo-list__item');
  listItemElem.textContent = name;
  return listItemElem;
};

export const renderUserData = (userData) => {
  const { avatar_url, name, location, repos_url } = userData;
  userAvatarElem.src = avatar_url;
  reposUrl = repos_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
  spinnerElem.style.display = 'none';
  return reposUrl;
};

export const renderReposNames = (reposNames) => {
  const reposElems = reposNames.map(createRepoItem);

  repolistElem.append(...reposElems);
};
