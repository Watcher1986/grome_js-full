// String.fromCodePoint(33);
// 'gOsh@'.charCodeAt(4);

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '111-11-11',
  },
  {
    name: 'John',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Ann',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Stephan',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Suzy',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Adel',
    phoneNumber: '777-77-77',
  },
];

const sortContacts = (contact) => {
  const result = contact.sort((a, b) => a.name.localeCompare(b.name));
  return result;
};

console.log(sortContacts(contacts));

const countOccurrences = (text = '', str) => {
  // put your code here
  if (str === '') {
    return null;
  }
  let countOccur = 0;
  const array = text.split(' ');
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].includes(str)) {
      countOccur += 1;
    }
  }
  return countOccur;
};
