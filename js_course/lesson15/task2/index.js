const message = 'Have a good day!';

function sendMessage(name) {
  let greeting = 'Hi, ';

  if (name) {
    const greeting = 'Hello ';
    let name = 'Pouly';
    console.log(greeting + name);
  } else {
    let message;
    console.log(message + ' is a message');
  }
}

sendMessage();

sendMessage('Luisa');

for (let i = 0; i < 10; i++) {
  console.log(i);
}
