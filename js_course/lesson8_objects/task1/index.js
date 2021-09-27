const prop = 'my';
const obj = {
  age: 17,
  interest: 'footbal',
  name: 'Tom',
  'my name': 'Bob',
  [prop + 'name']: 'value',
};

console.log(obj.age);

obj.age = 27;

console.log(obj.age);
console.log(obj);
console.log(obj['my name']);
console.log(obj[prop + 'name']);
