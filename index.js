"use strict";
// Implement class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Create an instance and call start
const myCar = new Car("Toyota", "Corolla", 2022);
console.log(`Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`);
myCar.start();
