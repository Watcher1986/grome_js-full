// pseudo arrays

// option 1

function argsSum() {
  return [].reduce.apply(arguments, [(acc, elem) => acc + elem, 0]);
}

const result = argsSum(1, 2, 3, 4);
console.log('option 1 :', result);
// option 2

function argsSum1() {
  return [...arguments].reduce((acc, elem) => acc + elem, 0);
}

const result1 = argsSum1(1, 2, 3, 4);
console.log('option 2 :', result1);
