// put your code here

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return {
      name: '',
      age: null,
    };
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
      console.log(`New photo request was sent for ${this.name}`);
    }
    return value;
  }
}

const user = new User();

console.log(User.createEmpty());

console.log(user);
