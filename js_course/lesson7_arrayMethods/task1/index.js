// const getSpecialNumbers = numbers => {
//   let specialNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 3 === 0) {
//       specialNumbers.push(numbers[i]);
//     }
//   }
//   return specialNumbers;
// };

const getSpecialNumbers = (numbers) => numbers.filter((num) => num % 3 === 0);

const arr = [12, 76, 44, 82, 99, 33];
console.log(getSpecialNumbers(arr));
console.log(arr);
