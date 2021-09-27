// const num = [13, 98, 43, 23, 41];
// function fde(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     return [arr.length, arr[0]]; }
//  const r = fde(num);
// console.log(r);

// ==== Destructuring and Spread =====

const num = [3, 12, 98, 34, 47, 7];
const [a, b, c, d, e, f, g] = num; // Destructuring
console.log(a, b, c, d, e, f);

// === Spread ====

const [m, n, ...arr] = num;
console.log(m, n, arr); // 3 12 [98, 34, 47, 7]

const [z, x, y, ...arr1] = num;
console.log(z, x, y, [3, 54, 12, arr1]); // OR LIKE THIS : console.log(z, x, y, [3, 54, 12, ...arr1, 41, 74, 33]);

function swap(arr2) {
  const [start, ...rest] = arr2;
  return [...rest, start];
}

console.log(swap(num));
