const spinnerElem = document.querySelector('.spinner_hidden');

export const fetchUserData = (userName) => {
  spinnerElem.style.display = 'flex';

  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );
};

export const fetchReposes = (repUrl) =>
  fetch(repUrl).then((response) => response.json());
