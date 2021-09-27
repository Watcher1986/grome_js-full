// const user = {
//   name: 'Tom',
//   age: 17,
// };

// Object.keys();
// Object.values();
// Object.entries();

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// =============================================
// const concatProps = obj => {
//   const arr = [];
//   for(const key in obj) {
//     arr.push(obj[key]);
//     // arr = arr.concat(obj[key])
//   }
//   return arr;
// }
// ===============================================
const concatProps = (obj) => Object.values(obj);
// ===============================================

const users = {
  Tom: 17,
  'John Doe': 19,
  'Bob Haris': 18,
};

const getAdults = (usersObj) =>
  Object.entries(usersObj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);

console.log(getAdults(users));

const users2 = {
  Tom: 15,
  Alice: 19,
  Gonel: 18,
  'Special agent': {
    name: 'David',
    age: 23,
    city: 'Irpin',
  },
  country: 'Ukraine',
};

const some = Object.entries(users2);
console.log(some);
console.log('====================');
const keys = Object.keys(users2);
console.log(keys);
console.log('====================');
const values = Object.values(users2);
console.log(values);
console.log('====================');
