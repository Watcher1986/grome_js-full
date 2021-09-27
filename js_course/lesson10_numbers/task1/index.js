const parseArray = (array) => array.map((el) => Number.parseFloat(el));

const elementsList = [4, 5.6, '  5.7kl', null, NaN, Infinity, undefined];

// console.log(parseArray(elementsList));

// console.log(elementsList);

const array1 = [
  0,
  1.34,
  -1.432,
  NaN,
  Infinity,
  ' 0.0333',
  -87.571,
  32,
  undefined,
];

// const getFiniteNumbers = (arr) => {
//   const array = [];
//   arr.forEach((num) => {
//     if (!Number.isFinite(num)) {
//       array.push(num);
//     }
//   });
//   return array;
// };

// put your code here
const getParsedIntegers = (arr) => {
  const array = [];
  arr.forEach((num) => array.push(Number.parseInt(num)));
  return array;
};

const getParsedIntegersV2 = (arr) => {
  const array = [];
  arr.forEach((num) => array.push(parseInt(num)));
  return array;
};

const getParsedFloats = (arr) => {
  const array = [];
  arr.forEach((num) => array.push(Number.parseFloat(num)));
  return array;
};

const getParsedFloatsV2 = (arr) => {
  const array = [];
  arr.forEach((num) => array.push(parseFloat(num)));
  return array;
};

console.log(getParsedIntegers(array1));
console.log(array1);
console.log(getParsedIntegersV2(array1));
console.log(array1);
console.log(getParsedFloats(array1));
console.log(array1);
console.log(getParsedFloatsV2(array1));
console.log(array1);

// put your code here
const multiRound = (num) => [
  Math.round(num * 100) / 100,
  Math.floor(num * 100) / 100,
  Math.trunc(num * 100) / 100,
  Math.ceil(num * 100) / 100,
  +num.toFixed(2),
];

console.log(multiRound(1.3286));
