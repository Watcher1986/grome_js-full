const $SECONDSINDAY = 86400;
const $SECONDSINHOUR = 3600;
const $SECONDSINMINUTE = 60;

const getDiff = (startDate, endDate) => {
  const dataStart = new Date(startDate).getTime();
  const dataEnd = new Date(endDate).getTime();
  const diff = Math.abs(dataStart - dataEnd) / 1000;
  const days = diff / $SECONDSINDAY;
  const hours = (diff - Math.floor(days) * $SECONDSINDAY) / $SECONDSINHOUR;
  const minutes =
    (hours * $SECONDSINHOUR - Math.floor(hours) * $SECONDSINHOUR) /
    $SECONDSINMINUTE;
  const seconds =
    minutes * $SECONDSINMINUTE - Math.floor(minutes) * $SECONDSINMINUTE;

  return `${Math.floor(days)}d ${Math.floor(hours)}h ${Math.floor(
    minutes
  )}m ${Math.floor(seconds)}s`;
};

const res = getDiff(
  new Date(2021, 0, 2, 12, 32, 32),
  new Date(2022, 3, 4, 21, 43, 12)
);
console.log(res);
