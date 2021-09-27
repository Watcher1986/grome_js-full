/* eslint-disable max-classes-per-file */

class Vehicle {
  constructor(name, hasWheels) {
    this.hasWheels = hasWheels;
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, speed) {
    super(name, false);
    this.speed = speed;
  }

  start() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

const ship = new Ship('Aurora', 12);

const ship2 = new Ship('Titanik', 11);

console.log(ship2);
ship.start();

console.log(ship);
console.log(Vehicle);

const ve = new Vehicle('samokat', true);
console.log(ve);
