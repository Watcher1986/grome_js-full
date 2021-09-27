// 'use strict';

let message = 'Just learn it!';

// FUNCTION EXPRESSION ================

const sendMessage = (name) => {
  const sender = 'Gromcode';
  console.log(`${name}, ${message}. You ${sender}`);
};

// FUNCTION DECLARATION ===============

sendMessage2('Jorik');

function sendMessage2(name) {
  const sender = 'Gromcode';
  console.log(`${name}, ${message}. You ${sender}`);
}

function setMessage(text) {
  message = text;
}

sendMessage('Konwert');

setMessage('Hello!');

sendMessage('LOLO');

message = 'Hi!';

sendMessage('Henry');
