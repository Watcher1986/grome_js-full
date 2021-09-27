const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const getDayOfWeek = (date, days) => {
  const dateClone = new Date(date);

  dateClone.setDate(date.getDate() + days);
  return weekDays[dateClone.getDay()];
};

console.log(getDayOfWeek(new Date(2021, 0, 1), 12));
