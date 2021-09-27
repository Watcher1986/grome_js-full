const addImageWithPromise = (imgSrc) => {
  const p = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolveCb({ width, height });
    };

    const onError = () => {
      rejectCb(new Error('Image load is failed'));
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', onError);
  });

  return p;
};

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const resultPromise = addImageWithPromise(imgSrc);

resultPromise.then((data) => console.log(data));
resultPromise.catch((error) => console.log(error));
console.log(addImageWithPromise);
