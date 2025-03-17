/*
Getters: Special methods that allow you to retrieve the value of an object property.

Setters: Special methods that allow you to set or update the value of an object property.

Getters and setters are important because they hide the internal implementation details of an object and prevent external code from directly accessing them.
*/

/*
// Example 1
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if(newWidth > 0) {
      this._width = newWidth;
    }
    else{
      console.error('Width must be a positive number.');
    }
  }

  set height(newHeight) {
    if(newHeight > 0) {
      this._height = newHeight;
    }
    else{
      console.error('Height must be a positive number.');
    }
  }

  get width() {
    return `${this._width.toFixed(1)}cm`;
  }

  get height() {
    return `${this._height.toFixed(1)}cm`;
  }

  get area() {
    return `${(this._width * this._height).toFixed(1)}cm`;
  }
}

const rectangle = new Rectangle(10, 15);

// rectangle.width = -20;
// rectangle.height = -5;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
*/

// Example 2
class Person{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  set firstName(newFirstName) {
    if(typeof newFirstName === 'string' && newFirstName.length > 0) {
      this._firstNmame = newFirstName;
    }
    else{
      console.error('Invalid first name.');
    }
  }

  set lastName(newLastName) {
    if(typeof newLastName === 'string' && newLastName.length > 0) {
      this._lastName = newLastName;
    }
    else{
      console.error('Invalid last name.');
    }
  }

  set age(newAge) {
    if(typeof newAge === 'number' && newAge >= 0) {
      this._newAge = newAge;
    }
    else{
      console.error('Invalid age.');
    }
  }

  get firstName() {
    return this._firstNmame;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._newAge;
  }

  get fullName() {
    return `My name is ${this._firstNmame} ${this._lastName
    } and I am ${this._newAge} years old.`;
  }
}

const person = new Person('John', 'Doe', 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);
