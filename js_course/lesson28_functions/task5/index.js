// хотел так , но долго возился , решил проще чтобы идти дальше

// const shmParams = {
//   years: [someRandomDate.getFullYear(), new Date().setFullYear],
//   months: [shmDate.getMonth(), shmDate.setMonth()],
//   days: [shmDate.getDate(), shmDate.setDate()],
//   hours: [shmDate.getHours(), shmDate.setHours()],
//   minutes: [shmDate.getMinutes(), shmDate.setMinutes()],
//   seconds: [shmDate.getSeconds(), shmDate.setSeconds()],
//   milliseconds: [shmDate.getMilliseconds(), shmDate.setMilliseconds()],
// };

const shmoment = (someRandomDate) => {
  const shmDate = new Date(someRandomDate);

  const calcDate = {
    add(param, num) {
      switch (param) {
        case 'years':
          shmDate.setFullYear(someRandomDate.getFullYear() + num);
          break;
        case 'months':
          shmDate.setMonth(someRandomDate.getMonth() + num);
          break;
        case 'days':
          shmDate.setDate(someRandomDate.getDate() + num);
          break;
        case 'hours':
          shmDate.setHours(someRandomDate.getHours() + num);
          break;
        case 'minutes':
          shmDate.setMinutes(someRandomDate.getMinutes() + num);
          break;
        case 'seconds':
          shmDate.setSeconds(someRandomDate.getSeconds() + num);
          break;
        case 'milliseconds':
          shmDate.setMilliseconds(someRandomDate.getMilliseconds() + num);
          break;
        default:
          alert('you have entered incompatible data');
      }
      return this;
    },
    subtract(param, num) {
      switch (param) {
        case 'years':
          shmDate.setFullYear(someRandomDate.getFullYear() - num);
          break;
        case 'months':
          shmDate.setMonth(someRandomDate.getMonth() - num);
          break;
        case 'days':
          shmDate.setDate(someRandomDate.getDate() - num);
          break;
        case 'hours':
          shmDate.setHours(someRandomDate.getHours() - num);
          break;
        case 'minutes':
          shmDate.setMinutes(someRandomDate.getMinutes() - num);
          break;
        case 'seconds':
          shmDate.setSeconds(someRandomDate.getSeconds() - num);
          break;
        case 'milliseconds':
          shmDate.setMilliseconds(someRandomDate.getMilliseconds() - num);
          break;
        default:
          alert('you have entered incompatible data');
      }
      return this;
    },
    result() {
      return shmDate;
    },
  };

  return calcDate;
};

// test data

// const res = shmoment(new Date(2020, 0, 7, 17, 17, 17))
//   .add('hours', 1123)
//   .subtract('months', 15)
//   .add('hours', 1234)
//   .add('days', 543)
//   .result();

// console.log(res);
