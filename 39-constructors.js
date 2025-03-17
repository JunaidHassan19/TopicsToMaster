/*

  constructor = special method for defining the properties and methods of objects.

  - The constructor method is called automatically when a new object is created.
  - The constructor method is a special method for creating and initializing an object created with a class.
  - There can only be one special method with the name "constructor" in a class.

*/

// Example 1
function Car(brand, model, year, color) {
  this.brand = brand,
  this.model = model,
  this.year = year,
  this.color = color
  this.drive = function() {console.log(`You are driving a ${this.brand} `)}
}

const car1 = new Car('Toyota', 'Corolla', 2020, 'Black');
const car2 = new Car('lamborghini', 'Aventador', 2021, 'Red');
const car3 = new Car('BMW', 'M5', 2022, 'White');

car1.drive();
car2.drive();
car3.drive();

/*
// console.log(car1);
console.log(car1.brand);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

// console.log(car2);
console.log(car2.brand);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

// console.log(car3);
console.log(car3.brand);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
*/