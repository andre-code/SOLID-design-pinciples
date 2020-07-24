class Vehicle {
	constructor(type) {
    this.typeVehicle = type
	}
  turnOn() {
    if(this.typeVehicle !== 'Bike') {
      return `Vehicle ${this.typeVehicle} is running`;
    } else {
      throw 'TurnOn is not implemented for Bikes';
    }
	}
  turnOff() {
    if(this.typeVehicle !== 'Bike') {
      return `Vehicle ${this.typeVehicle} is off`;
    } else {
      throw 'TurnOn is not implemented for Bikes';
    }
	}
  ride () {
    if(this.typeVehicle === 'Bike') {
      return 'The bike ride is done';
    } else {
      throw 'Ride is only for bikes';
    }
	}
  get typeVehicle() {
		return `The vehicle is a ${this.typeVehicle}`;
	}
}

const motoVehicle = new Vehicle('Moto');
const bikeVehicle = new Vehicle('Bike');

motoVehicle.turnOn();
bikeVehicle.ride();
console.log('Vehicle type 1:', motoVehicle.typeVehicle());
console.log('Vehicle type 2:', bikeVehicle.typeVehicle());