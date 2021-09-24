import { fetchUserData, fetchReposes } from './gateways.js';
import { renderUserData } from './user.js';
import { renderReposNames, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser);

const onSearchUser = async () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchReposes(userData.repos_url);
    renderReposNames(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }
  // fetchUserData(userName)
  //   .then((userData) => {
  //     renderUserData(userData);
  //     return userData.repos_url;
  //   })
  //   .then((url) => fetchReposes(url))
  //   .then((reposList) => {
  //     renderReposNames(reposList);
  //   })
  //   .catch((error) => {
  //     alert(error.message);
  //   })
  // hideSpinner();
};

showUserBtnElem.addEventListener('click', onSearchUser);
