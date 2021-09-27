const vehicle = {
  move() {
    console.log(`${this.name} moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

vehicle.move();

console.log(vehicle.toString);

const ship = {
  name: 'Aurora',
  hasWheels: false,
  liftAnchorDown() {
    console.log('Lifting anchor down');
    console.log(typeof this.liftAnchorDown, typeof this.move);
  },
  liftAnchorUp() {
    console.log('Lifting anchor up');
  },
  // __proto__: vehicle, obsolete
};

Object.setPrototypeOf(ship, vehicle);
ship.liftAnchorDown();
ship.stop();

console.log(ship);

// for (let prop in ship) {
//   if (ship.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }

// put your code here

function getOwnProps(object) {
  const arrOfProp = [];
  for (let prop in object) {
    console.log(typeof object[prop]);
    if (typeof object[prop] !== 'function' && object.hasOwnProperty(prop)) {
      console.log('this typeof prop is : ', typeof prop);
      arrOfProp.push(prop);
    }
  }
  return arrOfProp;
}

console.log(getOwnProps(ship));

console.log(Object.keys(ship));
