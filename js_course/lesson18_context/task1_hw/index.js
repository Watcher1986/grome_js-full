// put your code here

const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 18, email: 'example@server.com' },
    { name: 'Shusha', age: 19, email: 'shu@gmail.com' },
    { name: 'Yasha', age: 17, email: 'y@ukrmail.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ email, name }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());
