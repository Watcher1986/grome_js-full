// asyncCalculator

const asyncCalculator = (num) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 2000);
  })
    .then(
      (value) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const result = value ** 2;
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 2500);
        })
    )
    .then((value) => {
      const result = value * 2;
      console.log(`Double value: ${result}`);
      return result;
    });

const p = asyncCalculator(32);

p.then((value) => console.log(value));

// const p = asyncCalculator(32).then((value) => console.log(value)); ====

p.then((value) => {
  const result = value * 2;
  console.log(`Double value: ${result}`);
  return result;
});
