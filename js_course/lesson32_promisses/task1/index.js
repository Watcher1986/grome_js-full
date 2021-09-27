// // asyncSum(asyncNum1, asyncNum2, ...)

// // const p = new Promise();

// const resolvedPromise = Promise.resolve(17);

// const resolvedPromise2 = new Promise((resolve) => resolve(17));

// const rejectedPromise = Promise.reject(new Error('Error'));

// const rejectedPromise2 = new Promise((reject) => reject(new Error('Error')));

const getValueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(12, 1000);
const asyncNum2 = getValueWithDelay(33, 2000);
const asyncNum3 = getValueWithDelay('12', 2000);

const getSum = (numbers) =>
  numbers
    .filter((value) => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

const asyncNum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};

asyncNum(asyncNum1, asyncNum2, asyncNum3).then((result) => console.log(result));
