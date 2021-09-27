// pinger(num, period)

const pinger = (num, period) => {
  let i = num;
  console.log('Ping');

  const interval = setInterval(() => {
    --i > 0 ? console.log('Ping') : clearInterval(interval);
    // if (--i > 0) {
    //   console.log('Ping');
    // } else {
    //   clearInterval(interval);
    // }
  }, period);

  // setTimeout(() => {
  //   clearInterval(interval);
  // }, num * period);
};

pinger(7, 1500);
