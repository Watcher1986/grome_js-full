// // const users = {
// //   Tom: 15,
// //   Alice: 19,
// //   Gonel: 18,
// //   name: 'Jack',
// //   sayHi: function () {
// //     console.log('Hi');
// //   },
// // };

// // users.sayHi();

// const user3 = {
//   Tom: 15,
//   Alice: 19,
//   Gonel: 18,
//   name: 'Jack',
// };

function compareKeyValue(ele1, ele2) {
  for (let index = 0; index < ele1.length; ) {
    for (let ind = 0; ind < ele2.length; ind += 1) {
      if (ele1[index] === ele2[ind]) {
        index += 1;
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
}

function compareObjects(obj1, obj2) {
  // put your code here
  const arr1 = Object.keys(obj1).concat(Object.values(obj1));
  const arr2 = Object.keys(obj2).concat(Object.values(obj2));
  return compareKeyValue(arr1, arr2);
}
// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj2, obj3));
console.log(compareObjects(obj1, obj4));
