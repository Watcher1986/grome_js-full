// const vehicle = {
//   move() {
//     console.log(`${this.name} moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// vehicle.move();

// console.log(vehicle.toString);

// const ship = {
//   name: 'Aurora',
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log('Lifting anchor down');
//   },
//   liftAnchorUp() {
//     console.log('Lifting anchor up');
//   },
//   // __proto__: vehicle, obsolete
// };

// put your code here

const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: vehicle,
};

// Object.setPrototypeOf(ship, vehicle);
ship.startMachine();
ship.stopMachine();

console.log(ship);
