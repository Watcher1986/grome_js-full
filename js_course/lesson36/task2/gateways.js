export const fetchUserData = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Failed to load data');
};

export const fetchReposes = async (repUrl) => {
  const response = await fetch(repUrl);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Failed to load data');
};
