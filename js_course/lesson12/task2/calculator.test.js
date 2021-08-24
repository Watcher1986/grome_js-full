import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';
it('should get squared numbers from array', () => {
  const result = getSquaredArray([1, 2, 3, 4]);
  expect(result).toEqual([1, 4, 9, 16]);
});

it('should keep odd numbers only from array', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it('should get sum of numbers', () => {
  const result = getSum(3, 7);
  expect(result).toEqual(10);
});
