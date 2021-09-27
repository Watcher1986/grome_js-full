function User(name, age) {
  this.name = name;
  this.age = age;

  // this.sayHi = function () {
  //   console.log(`Hi, I am ${this.name}`);
  // };
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

const user1 = new User('Nick', 17);

console.log(user1);

user1.sayHi();

const user2 = new User('Velik', 15);

user2.sayHi();

console.log(user2);
