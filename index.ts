// Define interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implement class
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance and call start
const myCar = new Car("Toyota", "Corolla", 2022);
console.log(`Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`);
myCar.start();
