/*
super keyword:
  - Refers to the parent class.
  - Calls the constructor of the parent class to initialize inherited properties.
  - Accesses the parent class’s methods and properties.

this keyword:
  - Refers to the current instance of the class.
  
Key Points:
  - Use super in constructors to ensure proper inheritance.
  - Helps maintain clarity when working with extended classes.
*/

class Animal {
  constructor(name, age, sound) {
    this.name = name;
    this.age = age;
    this.sound = sound;

  }

  volume(sound) {
    console.log(`${this.name} makes ${this.sound} sound`);
  }
}

class Cat extends Animal {
  constructor(name, age, sound) {
    super(name, age, sound);
  }

  volume(sound) {
    console.log(`${this.name} makes ${this.sound} sound`);
  }
}
class Dog extends Animal {
  constructor(name, age, sound) {
    super(name, age, sound);
  }

  volume(sound) {
    console.log(`${this.name} makes ${this.sound} sound`);
  }
}
class Lion extends Animal {
  constructor(name, age, sound) {
    super(name, age, sound);
  }

  volume(sound) {
    console.log(`${this.name} makes ${this.sound} sound`);
  }
}

const cat = new Cat('cat', 2, 'meow');
const dog = new Dog('dog', 4, 'bark');  
const lion = new Lion('lion', 5, 'roar');

cat.volume();
dog.volume(); 
lion.volume();

// console.log(cat.name, cat.age, cat.sound);
// console.log(dog.name, dog.age, dog.sound);  
// console.log(lion.name, lion.age, lion.sound);