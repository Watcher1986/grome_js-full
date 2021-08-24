import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should get squared min absolute number from array', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should get squared min absolute number from array', () => {
  const result = getMinSquaredNumber('abscefg');
  expect(result).toEqual(null);
});

it('should get squared min absolute number from array', () => {
  const result = getMinSquaredNumber([-3, -43, 8, 29, -5]);
  expect(result).toEqual(9);
});
