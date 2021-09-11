const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const getDayOfWeek = (date, days) => {
  const day = new Date(date);

  day.setDate(date.getDate() + days);
  return weekDays[day.getDay()];
};

// console.log(getDayOfWeek(new Date(2021, 0, 1), 12));
