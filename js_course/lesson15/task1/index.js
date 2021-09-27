// counter

// let count = 0;

const makeCounter = () => {
  let count = 0;
  return function () {
    return count++;
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log('===================');
const createCalculator = () => {
  // put your code here
  let number = 0;

  function add(num) {
    number += num;
  }

  function decrease(num) {
    number -= num;
  }

  function reset() {
    number = 0;
  }

  function getMemo() {
    return number;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calculator = createCalculator();
const calculatorNext = createCalculator();

console.log(calculator.getMemo()); // 0

console.log(calculator.add(3));

console.log(calculator.getMemo()); // 3

console.log(calculator.decrease(5));

console.log(calculatorNext.add(5));

console.log(calculatorNext.getMemo()); // 5

console.log(calculator.getMemo()); // -2

console.log(calculator.reset());

console.log(calculator.getMemo());
