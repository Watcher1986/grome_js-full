const text1 = 'message';

const myMessage = `
The text is ${text1.toUpperCase()},
And some another text .`;

console.log(myMessage);

console.log(text1[text1.length - 1]);
console.log(text1.charAt(3));

text1[2] = 'W'; // NOT WORKING !!!

// const k ='fdrd is Some hard thing gogo lugav';

const splitText = (text, len) => {
  const strArr = [];
  let startPosition = 0;
  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return strArr.join('\n');
};

console.log(splitText('abcdefghjklmn', 4));
