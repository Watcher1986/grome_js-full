// getLocaleStorageData

// const user = {
//   name: 'Tom',
//   age: 17,
//   isStudent: false,
//   driverLicense: null,
//   hobbies: ['fotball', 'driving'],
//   education: [
//     {
//       name: 'Mit Precourse',
//       graduateDate: '2021-05-04T14:48:46:105Z',
//     },
//   ],
// };

localStorage.setItem(
  'user',
  JSON.stringify({
    name: 'Tom',
    age: 17,
    isStudent: false,
    driverLicense: null,
    hobbies: ['fotball', 'driving'],
    education: [
      {
        name: 'Mit Precourse',
        graduateDate: '2021-05-04T14:48:46:105Z',
      },
    ],
  })
);
// localStorage.clear();
localStorage.setItem('tasks', JSON.stringify({ 'call Nick ': 'cill Bill' }));
localStorage.setItem('age', JSON.stringify(17));
localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('someItem', JSON.stringify(null));
localStorage.setItem('boolean', JSON.stringify(false));

// console.log(JSON.parse(localStorage.getItem('tasks')));
// console.log(JSON.parse(localStorage.getItem('age')));

const getLocaleStorageData = () => {
  const obj = Object.entries(localStorage).join();
  console.log(obj);
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

console.log(getLocaleStorageData());

// const getLocaleStorageData = () => {
//   for (let i = 0; i < localStorage.length; i += 1) {
//     console.log(localStorage.key(i));
//   }
// };

// getLocaleStorageData();
