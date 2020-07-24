class Vehicle {
	constructor(type) {
    this.typeVehicle = type
	}
  get typeVehicle() {
		return `The vehicle is a ${this.typeVehicle}`;
	}
}
class Bike extends Vehicle {
	constructor() {
    super('Bike');
	}
  ride () {
    return 'The bike ride is done';
	}
}
class Moto extends Vehicle {
	constructor() {
    super('Moto');
	}
  turnOn() {
    return `Vehicle ${this.typeVehicle} is running`;
	}
  turnOff() {
    return `Vehicle ${this.typeVehicle} is off`;
	}
}

const motoVehicle = new Moto();
const bikeVehicle = new Bike();


motoVehicle.turnOn();
bikeVehicle.ride();
console.log('Vehicle type 1:', motoVehicle.typeVehicle());
console.log('Vehicle type 2:', bikeVehicle.typeVehicle());