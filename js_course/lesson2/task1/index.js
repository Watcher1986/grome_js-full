const con = 'I\'m "Front-End" Developer"eveloper';
console.log(con);

const house = {
  height: 5,
  numberOfWindows: 10,
};

const anotherHouse = house;
anotherHouse.numberOfWindows = 7;

console.log(anotherHouse.numberOfWindows);
console.log(house.numberOfWindows);
console.log(typeof house);
