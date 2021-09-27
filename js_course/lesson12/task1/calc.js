/* eslint-disable default-case */

const calc = (expression) => {
  const [a, operator, b] = expression.split(' ');
  let result = 0;
  switch (operator) {
    case '+':
      result = Number(a) + +b;
      break;
    case '-':
      result = a - b;
      break;
  }
  // return expression + ' = ' + result;
  return `${expression} = ${result}`;
};
