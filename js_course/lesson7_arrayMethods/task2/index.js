// unsorted array => sorted array
const sortArray = (numbers) =>
  // numbers.sort((a, b) => a - b); // a - b Ascending order \\ b - a Descending order
  // sort() changes current array
  numbers.slice().sort((a, b) => a - b);
const numbers = [21, 4, 78, 43, 90, 12, 77, 43];
console.log(sortArray(numbers));
