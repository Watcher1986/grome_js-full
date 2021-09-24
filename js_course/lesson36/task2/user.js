const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

let reposUrl;

export const renderUserData = (userData) => {
  const { avatar_url, name, location, repos_url } = userData;
  userAvatarElem.src = avatar_url;
  reposUrl = repos_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
  return reposUrl;
};
