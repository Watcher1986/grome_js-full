const students = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
];
const month = [
  'Jan',
  'Fab',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function studentsBirthDays(array) {
  // const studByBirthDay = {};

  return array.reduce((acc, obj) => {
    const birthDay = new Date(obj.birthDate);
    acc[month[birthDay.getMonth()]] = [obj.name].sort(
      (a, b) => a.birthDay.getDate() - b.birthDay.getDate()
    );
    console.log(acc);

    return acc;
  }, {});
}

studentsBirthDays(students);
