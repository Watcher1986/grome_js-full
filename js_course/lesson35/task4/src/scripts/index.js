import { fetchUserData, fetchReposes } from './handlers.js';
import { renderUserData, renderReposNames } from './renderers.js';

const userAvatarElem = document.querySelector('.user__avatar');

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

userAvatarElem.src = defaultAvatar;

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => renderUserData(userData))
    .then((data) => fetchReposes(data))
    .then((data) => renderReposNames(data))
    .catch((error) => {
      console.error(error.message);
      return Promise.reject(new Error('Failed to load data'));
    })
    .catch((error) => alert(error.message));
};

showUserBtnElem.addEventListener('click', onSearchUser);
