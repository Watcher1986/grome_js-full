const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(value) {
    // set fullName same
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

user.setFullName('Tom Howkins');
// syntax for set user.setFullName = 'Tom Howkins';

console.log(user.fullName);

console.log(user.lastName);
