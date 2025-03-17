/*
  Nested Objects: Objects that are properties of another object.
  They enable the representation of complex data structures.
  For example:
  
  const user = {
    address: {            // Nested object for address details
      street: '123 Main St',
      city: 'Anytown'
    },
    contactInfo: {        // Nested object for contact details
      phone: '555-555-5555',
      email: 'user@example.com'
    }
  };
  
  In this structure, "address" and "contactInfo" are nested within the main user object.
*/

/*
// Example 1
const person = {
  fullName: 'John Doe',
  age: 32,
  isStudent: false,
  hibbies: ['reading', 'music', 'movies'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA'
  },
}
/*
console.log(person.fullName); // John Doe
console.log(person.age); // 32
console.log(person.isStudent); // false
console.log(person.hibbies); // ['reading', 'music', 'movies']
console.log(person.address); // { street: '123 Main St', city: 'Anytown', country: 'USA' }
*/

// for(const property in person.address) {
//   console.log(person.address[property]);
// }


// EXAMPLE 2

class Person{
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}


class Address{
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person('John Doe', 32, '123 Main St', 'Anytown', 'USA');
const person2 = new Person('steve Smith', 25, '456 Main St', 'Anytown', 'USA');
const person3 = new Person('david Johnson', 45, '789 Main St', 'Anytown', 'USA');


console.log(person1.name);
console.log(person1.age);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);