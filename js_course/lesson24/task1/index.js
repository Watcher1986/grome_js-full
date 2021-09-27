const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  console.log(day);
  const dateInFuture = new Date(date).setDate(day + days);

  console.log(dateInFuture);
  return weekDays[new Date(dateInFuture).getDay()];
};

const date = getDayOfWeek(new Date(2022, 0, 1), 12);

console.log(date);
// console.log(new Date(getDayOfWeek(new Date(2021, 0, 1), 16)));
