// // '1 + 2' => '1 + 2 = 3'
// const calc = expression => {
//   const a = expression.split(' ');
//   let result = 0;
//   switch (a[1]) {
//     case '+':
//       result = Number(a[0]) + +a[2];
//       break;
//     case '-':
//       result = a[1] - a[2];
//       break;
//   };
//   // return expression + ' = ' + result;
//   return `${expression} = ${result}`
// }

// '1 + 2' => '1 + 2 = 3'
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

const text = 'some not big text';

// put your code here
const reverseString = (str) => {
  if (typeof str !== 'string') {
    return null;
  }
  let reversStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversStr += str[i];
  }
  return reversStr;
};

console.log(reverseString(text));

const reverseString1 = (str) => {
  if (typeof str !== 'string') {
    return null;
  }
  return [...str].reverse().join('');
};

function reverseString3(str) {
  if (str === '') {
    return '';
  }
  return reverseString3(str.substr(1)) + str.charAt(0);
}
console.log(reverseString3('hello'));
