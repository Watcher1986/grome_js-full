export const reverseArray = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  const arrCopy = [...array];
  return arrCopy.reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  if (
    !Array.isArray(clients, balances) ||
    clients.length === 0 ||
    balances.length === 0
  ) {
    return null;
  }
  const ind = clients.indexOf(client);
  let bal = balances[ind];
  if (bal < amount) {
    return -1;
  }
  bal -= amount;
  return bal;
};

/* eslint-disable no-restricted-syntax */

export const getAdults = (obj) => {
  if (Object.keys(obj).length === 0) {
    return null;
  }
  const newObj = {};
  for (const el in obj) {
    if (obj[el] >= 18) {
      newObj[el] = obj[el];
    }
  }
  return newObj;
};
