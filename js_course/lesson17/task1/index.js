const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
  sayHi(age, message) {
    console.log(`${message}. i'm ${this.firstName}. I'm ${age} years old.`);
  },
  getFullName(message, num) {
    console.log(
      `there is no forgiven for this , ${message} and you have only ${num} days !`
    );
    console.log(`${this.firstName} ${this.lastName}.`);
  },
};

// user.getFullName();

// const func = user.getFullName.bind({ firstName: 'Tom', lastName: 'Soyer' });

// func(); // => undefined undefined

// .bind();

const func1 = user.getFullName;

func1.call({ firstName: 'Tikuna', lastName: 'Guanovale' }, 'you are firred', 3);

const func = user.sayHi; // (17, 'Very good! Ok ');

const anotherName = {
  firstName: 'Tomik',
};

func.apply(anotherName, [17, 'Very good ! Ok']);

// func.call(anotherName, 17, 'Very good ! Ok');

// func(17, 'Very good! Ok ');
