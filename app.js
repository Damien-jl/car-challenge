class Vehicle {
    constructor (make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk () {
        return 'Beep';
    }
    toString () {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor() {
        super()
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor() {
        super()
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!';
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(vehicle) {
        if (!vehicle instanceof Vehicle) {
            return 'only vehicles are allowed in here!';
        } 
        if (this.vehicles.length >= this.capacity) {
            return 'Sorry we have reached our capacity';
        } 
        this.vehicles.push(vehicle);
        return 'Vehicle added!';
    }
}