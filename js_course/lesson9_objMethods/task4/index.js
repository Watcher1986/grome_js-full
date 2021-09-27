const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

const getPeople = (obj) => {
  const array = [];
  Object.values(obj).forEach((arr) => {
    arr.forEach((object) => array.push(object.name));
  });
  return array;
};

console.log(getPeople(rooms));

// output : ["Jack", "Andrey", "Ann", "Vasyl", "Dan", "Denis", "Max", "Alex"]
