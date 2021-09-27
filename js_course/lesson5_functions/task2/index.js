function getEvenOdd(num) {
  if (num % 2 === 0) {
    return 'even';
  }
  return 'odd';
}

getEvenOdd(17);
const res = getEvenOdd(14);

// ==== Anonimus function ======

const getSum = function (a, b) {
  return a + b;
};

function getSum1(a, b) {
  return a + b;
}

const result = getSum(17, 7);
const result1 = getSum1(3, 7);
