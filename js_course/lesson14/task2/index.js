// messenger

let message = 'Hi!';

const createMessenger = () => {
  function sendMessage(name) {
    const sender = 'Gromcode';
    console.log(`${name}, ${message}. You ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
  };
};

const messanger = createMessenger();

messanger.sendMessage('Bob');

const messanger2 = createMessenger();

messanger2.sendMessage('Goga');

messanger.setMessage('Good bye!');

messanger.sendMessage('Bob');

messanger2.sendMessage('Lilu');
