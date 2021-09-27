// put your code here

const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const fiLaNa = fullName.split(' ');
    this.firstName = fiLaNa[0];
    this.lastName = fiLaNa[1];
  },
};

console.log(user);

const getFullNa = user.getFullName.bind(user);

getFullNa();

const setFull = user.setFullName.bind(user);

setFull('Giva Lova');

console.log(user);
