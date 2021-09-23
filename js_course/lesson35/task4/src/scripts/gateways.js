export const fetchUserData = (userName) =>
  fetch(`https://api.github.com/users/${userName}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });

export const fetchReposes = (repUrl) =>
  fetch(repUrl).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
