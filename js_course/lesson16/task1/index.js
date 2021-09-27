// let a = 17;

// if (a) {
//   let a = 1;
//   console.log(a);
// }

// console.log(a);

// var greeting = 'Hello';

// function sayHi() {
//   greeting = 'Hi';
//   console.log(greeting);

//   if (false) {
//     var greeting;
//   }
// }

// sayHi();
// console.log(greeting);

var foo = 1;

function bar() {
  if (!foo) {
    var foo = 10;
  }

  return foo;
}

var foo = bar();

console.log(foo);
