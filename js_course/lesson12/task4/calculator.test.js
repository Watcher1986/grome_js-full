import { calc } from './calculator.js';

it('should calculate two numbers by given operand', () => {
  const result = calc('1 + 3');
  expect(result).toEqual(4);
});

it('should calculate two numbers by given operand', () => {
  const result = calc('1 - 3');
  expect(result).toEqual(-2);
});

it('should calculate two numbers by given operand', () => {
  const result = calc('1 * 3');
  expect(result).toEqual(3);
});

it('should calculate two numbers by given operand', () => {
  const result = calc('12 / 3');
  expect(result).toEqual(4);
});

it('should calculate two numbers by given operand', () => {
  const result = calc([1, 3]);
  expect(result).toEqual(null);
});
