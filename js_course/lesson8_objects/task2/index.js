// ==== transformToObject =====

const transformToObject = (arr) => {
  const obj = {};
  arr.forEach((el) => {
    obj[el] = el;
  });
  return obj;
};

// [1, 'text'] => { '1': 1, text: 'text'}
const arr = [1, 'text'];
const result = transformToObject(arr);

console.log(result);

const user = {
  name: 'Tom',
};
console.log(user.name);
user.name = 'Bob';

console.log(user.name);

const a = {}; // a === b => false
const b = {};
// ============>
// const a = {}; // a === b => true
// const b = a;
