class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static compare(user, user1) {
    return user.age - user1.age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    }
    this.age = value;
    if (value >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }
}

const user = new User('Fill', 27);

const user1 = new User('Tayler', 37);

// user.sayHi();
console.log(User.compare(user, user1));

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// User.prototype.requestNewPhoto = function () {
//   console.log(`New photo request was sent for ${this.name}`);
// };

// User.prototype.setAge = function (value) {
//   if (value < 0) {
//     return false;
//   }
//   this.age = value;
//   if (value >= 25) {
//     this.requestNewPhoto();
//   }
//   return value;
// };
