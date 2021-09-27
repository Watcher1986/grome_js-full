// getMaxAbsoluteNumber

// [-12, -32, -76, -87] => 87

const array = [-12, -32, -76, -87, -432, -321];

// const getMaxAbsoluteNumber = (arr) => {
//   let max = -Infinity;
//   arr.forEach((num) => {
//     if (Math.abs(num) > max) {
//       max = Math.abs(num);
//     }
//   });
//   return max;
// };

// console.log(getMaxAbsoluteNumber(array));

// const getMaxAbsoluteNumber = (arr) => {
//   const absolutValues = arr.map((num) => Math.abs(num));
//   return Math.max(...absolutValues);
// };

// console.log(getMaxAbsoluteNumber(array));
// // 1 - get abs values
// // 2 - fid max

// const res = 'kio';

// const getMaxAbsoluteNumber1 = (arr) => {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     return null;
//   }
//   const absNums = arr.map((num) => Math.abs(num));
//   return Math.max(...absNums);
// };

// console.log(getMaxAbsoluteNumber1(res));

const getRandomNumbers = (length, from, to) => {
  // put your code here
  if (to - from < 1) {
    return null;
  }
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    const num = Math.random() * (to - from) + from;
    arr.push(Math.floor(num));
  }
  return arr;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 5.4, 7.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 4.4, 5.22)); // ==> [3, 3, 2, 3, 2]

// 'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) =>
  // put your code here
  [
    Math.floor(num * 10 ** prec) / 10 ** prec,
    Math.trunc(num * 10 ** prec) / 10 ** prec,
    Math.ceil(num * 10 ** prec) / 10 ** prec,
    Math.round(num * 10 ** prec) / 10 ** prec,
    +num.toFixed(prec),
  ];
// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
