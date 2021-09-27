'use strict';

const user = {
  name: 'Bob',
  sayHi() {
    console.log(this.name);
  },
};

// const func = user.sayHi.bind(user);

// func();

// setTimeout(user.sayHi.bind(user), 1000);
//
// setTimeout(() => user.sayHi(), 1000);

const event = {
  guests: [
    { name: 'Tom', email: 't@gmail', age: 17 },
    { name: 'Bob', email: 'b@gmail', age: 18 },
  ],
  message: 'Welcome to the party',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        text: `Hi ${name}. ${this.message}`,
        email,
      }));
  },
};

console.log(event.getInvitations());
