// addImage

// const buttonElem = document.querySelector('#button');

// buttonElem.addEventListener('click', () => console.log('Clicked on button'));

// let sum = 0;

// const startTime = new Date();
// console.log('Cycle started');
// for (let i = 0; i < 1000000; i += 1) {
//   sum += i;
// }
// const endTime = new Date();
// console.log(`Cycle took ${endTime - startTime}ms`);

const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };

  imgElem.addEventListener('load', onImageLoaded);

  imgElem.addEventListener('error', () => callback('Image load failed'));
};

const imgSrc =
  'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';

const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = data;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

addImage(imgSrc, onImageLoaded);
