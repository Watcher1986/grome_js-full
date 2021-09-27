const users = {
  Tom: 15,
  Alice: 19,
  Gonel: 18,
};
const agent = {
  'Special agent': {
    name: 'David',
    age: 23,
    city: 'Irpin',
  },
  country: 'Ukraine',
};

// const result = Object.assign(users, agent);
// console.log(result);
// console.log(result === users); // true ;
// result === agent - false ;

const copyObj = (obj, obj2) => Object.assign(obj, obj2);

const res = copyObj(agent, users);
console.log(res);
console.log(users);
console.log(agent);

// ========Spread operator ==========

const guys = { ...users };
console.log(guys);

const user3 = {
  Tom: 15,
  Alice: 19,
  Gonel: 18,
  name: 'Jack',
};

const { Tom: Goga = 12, ...rest } = user3;
console.log(rest);
console.log(user3);

const player = {
  game: 'footbal',
  ...rest,
};

console.log(player);

function getKeys(obj) {
  // put you code here
  Object.keys(obj).forEach((el) => console.log(el));
}

getKeys(user3);
