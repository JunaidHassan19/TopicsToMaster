/*

inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child)
helps to avoid code duplication

*/

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}
class Rabbit extends Animal {
  name = 'Rabbit';

  run() {
    console.log(`This ${this.name} is running`);
  }
}
class Dog extends Animal {
  name = 'Dog';

  bark() {
    console.log(`This ${this.name} is barking`);
  }
}
class Cat extends Animal {
  name = 'Cat';

  cuteness() {
    console.log(`This ${this.name} is cute`);
  }
}

const rabbit = new Rabbit();
const dog = new Dog();
const cat = new Cat();

console.log(cat.alive);
cat.eat();
cat.sleep();
cat.cuteness();
