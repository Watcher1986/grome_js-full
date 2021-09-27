// defer(func, ms) => Function

function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

// const sayHi = () => {
//   console.log('Good work !');
// };

// sayHi();

// const sum = (a, b) => {
//   console.log(a + b);
// };

// const deferredSum = defer(sum, 2000);

// deferredSum(3, 7);

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I'm ${this.name} !`);
  },
};

// const deferredUser = defer(user.sayHi.bind(user), 2000);

const deferredUser = defer(user.sayHi, 2000);

deferredUser.call({ name: 'Bobik' });
