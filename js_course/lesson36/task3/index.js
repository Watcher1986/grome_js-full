const ids = ['google', 'facebook', 'Watcher1986'];

const fetchUser = async (USERID) => {
  const response = await fetch(`https://api.github.com/users/${USERID}`);
  if (response.ok) {
    return response.json().then((user) => user.blog);
  }
  return Promise.reject(new Error('Failed to load data'));
};

const getUsersBlogs = (usersIds) => {
  const usersLinks = usersIds.map((usId) => fetchUser(usId));
  return Promise.all(usersLinks);
};

getUsersBlogs(ids).then((linksList) => console.log(linksList));
