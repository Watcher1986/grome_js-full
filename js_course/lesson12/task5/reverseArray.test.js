import { reverseArray, withdraw, getAdults } from './reverseArray.js';

it('should return new reversed array from given', () => {
  const result = reverseArray([3, 1, 5, 2, 8]);
  expect(result).toEqual([8, 2, 5, 1, 3]);
});

it('should return new reversed array from given', () => {
  const result = reverseArray([]);
  expect(result).toEqual(null);
});

it('should return new reversed array from given', () => {
  const result = reverseArray('1, 2. 3, 4, 5');
  expect(result).toEqual(null);
});

it('should return account balance if there is enough money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('should return account balance if there is enough money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

it('should return account balance if there is enough money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [], 'John', 50);
  expect(result).toEqual(null);
});

it('should return account balance if there is enough money', () => {
  const result = withdraw('Ann, John, User', [1400, 87, -6], 'John', 50);
  expect(result).toEqual(null);
});

it('should return object with adults from given object', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it('should return object with adults from given object', () => {
  const result = getAdults({});
  expect(result).toEqual(null);
});
