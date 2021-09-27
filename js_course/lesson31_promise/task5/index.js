// put your code here
const asyncCalculator = (numbr) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);
      resolve(numbr);
    }, 500);
  })
    .then(
      (value) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const result = value ** 2;
            if (numbr === 5) {
              console.log(`Squared value: ${result}`);
            }
            resolve(result);
          }, 500);
        })
    )
    .then((value) => {
      const result = value * 2;
      if (numbr === 5) {
        console.log(`Doubled value: ${result}`);
      }
      return result;
    });

const p = asyncCalculator(3);

p.then((data) => console.log(data));
