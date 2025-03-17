/*

  this = reference to the object where THIS is used 
        (the object depends on the immediate context)
        person.name = this.name

  1. In a method, this refers to the owner object.
  2. Alone, this refers to the global object.
  3. In a function, this refers to the global object.
  4. In a function, in strict mode, this is undefined.
  5. In an event, this refers to the element that received the event.

*/


console.log(this); // window object

const person1 = {
  name: 'John',
  favFood: 'Pizza',
  sayHello: function () {
    // console.log(`Hi, my name is ${this.name}`);
    console.log(`Hi, my name is ${this.favFood}`)
  },
  eat: function() {
    console.log(`${this.name} is eating ${this.favFood}`);
  }
}

const person2 = {
  name: 'peter',
  favFood: 'chicken',
  sayHello: function () {
    console.log(`Hi, my name is ${this.favFood}`)
  },
  eat: function() {
    console.log(`${this.name} is eating ${this.favFood}`);
  }
}

// person1.sayHello();
person1.eat();

person2.eat();

