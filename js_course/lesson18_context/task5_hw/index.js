const saveCalls = (func) => {
  const calls = [];
  return function withMemory(...arg) {
    calls.push(arg);
    withMemory.calls = calls;
    return func.call(this, ...arg);
  };
};

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(5, 7);

console.log(testWithMemory.calls);

// const user = {
//   name: 'John',
//   sayHI() {
//     return this.name;
//   },
// };

// const methodWithMemory = saveCalls(user.sayHi);

// methodWithMemory.apply({ name: 'Tom' });

// console.log(methodWithMemory.calls);
