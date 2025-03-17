/*

  Static = keyword is used to create a static method for a class.
  Static methods are called without instantiating their class and cannot be called through a class instance.
           
        = Keyword that defines pproperties or methods that belong to a class itself, rather than the objects created from tha class (class owes anything static, not the object)

*/

/*
// Example 1
class MathUtill {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}


console.log(MathUtill.PI);
console.log(MathUtill.getDiameter(12));
console.log(MathUtill.getCircumference(12));
console.log(MathUtill.getArea(12));
*/

// Example 2
class user {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    user.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${user.userCount} users`);
  }
  sayHello() {
    console.log(`Hello, I'm ${this.username}`);
  }
}

const user1 = new user('John');
const user2 = new user('Doe');
const user3 = new user('Smith');

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

user1.sayHello();
user2.sayHello(); 
user3.sayHello();
user.getUserCount();