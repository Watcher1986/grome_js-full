// [1, [8, 3, 4], 5, [7]] => [1, 8, 3, 4, 5, 7]
// const flatArray = (arr) => arr.reduce((accum, elem) =>
//    accum.concat(elem), []);

const flatArray = (arr) => arr.flat();

const arr = [1, [8, 3, 4], 5, [7]];
console.log(flatArray(arr));
// [(1, 2, 3, 4)].reduce(
//   (acc, num) => acc + num,
//   0
// );
// 0 - acc
// 1: 0, 1 => 1
// 2: 1, 2 => 3
// 3: 3, 3 => 6
// 4: 6, 4 => 10
