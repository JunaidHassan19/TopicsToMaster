/*

  objects = A collection of related properties and methods.
           Can represent real world objects like a car, a person, etc.
           object = { key: value, key: value, key: value, ..., function() {} }
          
*/

// Example 1
const person1 = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 30,
  isEmployed: true,
  sayHello: () => {
    console.log('Hi! i am John Doe');
  },
  eat: () => {
    console.log('John Doe is eating')
  },
}


const person2 = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  isEmployed: false,
  sayHello: () => {
    console.log('Hi! i ma Tony Stark')
  },
  eat: () => {
    console.log('Tony Stark is eating');
  },
}

person1.sayHello(); // Hi! i am John Doe
person1.eat(); // John Doe is eating
person2.sayHello(); // Hi! i am Tony Stark
person2.eat(); // Tony Stark is eating

/*

console.log(person1); // { firstName: 'John', lastName: 'Doe', age: 30, isEmployed: true }
console.log(person1.firstName); // John
// console.log(person1['firstName']); // John
console.log(person1.lastName); // Doe
console.log(person1.age); // 30
console.log(person1.isEmployed); // true


console.log(person2); // { firstName: 'Tony', lastName: 'Stark', age: 45, isEmployed: false }
console.log(person2.firstName); // Tony
console.log(person2.lastName); // Stark
console.log(person2.age); // 45
console.log(person2.isEmployed); // false
  
*/