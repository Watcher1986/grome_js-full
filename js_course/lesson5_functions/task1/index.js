// const prefix = 'Hi, ';

// function sayHi(name) {
//   console.log(arguments);
//   const greeting = prefix + name;
//   console.log(greeting);
// }
// sayHi('Ann', 'Bob');

const giveMoney = 'Ok, i will give you money ';

// function ok(name, anotherName) {
//   const ok1 = giveMoney + anotherName;
//   const ok2 = giveMoney + name
//  ;
//  console.log(ok2);
//  console.log(ok1);
// }

function ok(name = 'anonim', anotherName = 'abonent') {
  const ok1 = giveMoney + anotherName;
  const ok2 = giveMoney + name;
  console.log(ok2);
  console.log(ok1);
}

ok('Igor');

ok('Igor', 'Goga');
