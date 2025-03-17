/*

JSON: JavaScript Object Notation
    =   data- interchange format Used to exchange data between
        a browser and a server.
        JSON files {key:value} OR [value1, value2, value3]

    JSON.parse() : convert JSON string into JS object
    JSON.stringify() : convert JS object into JSON string
  
*/

const jsonNames = `["John", "Jane", "Joe", "Jill", "Jack"]`;
const jsonPerson = `{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "isStudent": false,
  "hobbies": ["reading", "swimming", "coding"]
}`;
const jsonPeople = `[{
  "name": "John Doe",
  "age": 30,
  "city": "New York"
}, {
  "name": "Jane Doe",
  "age": 25,
  "city": "San Francisco"
}, {
  "name": "Jim Doe",
  "age": 35,
  "city": "Chicago"
}, {
  "name": "Jill Doe",
  "age": 40,
  "city": "Los Angeles"
}, {
  "name": "Jack Doe",
  "age": 45,
  "city": "Miami"
}, {
  "name": "Jenny Doe",
  "age": 50,
  "city": "Seattle"
}, {
  "name": "Jerry Doe",
  "age": 55,
  "city": "Boston"
}, {
  "name": "Judy Doe",
  "age": 60,
  "city": "Denver"
}, {
  "name": "Jeff Doe",
  "age": 65,
  "city": "Dallas"
}, {
  "name": "Jesse Doe",
  "age": 70,
  "city": "Houston"
}, {
  "name": "Jasmine Doe",
  "age": 75,
  "city": "Phoenix"
}, {
  "name": "Jasper Doe",
  "age": 80,
  "city": "Las Vegas"
}, {
  "name": "Jade Doe",
  "age": 85,
  "city": "Portland"
}, {
  "name": "Jax Doe",
  "age": 90,
  "city": "San Diego"
}, {
  "name": "Jared Doe",
  "age": 95,
  "city": "Austin"
}, {
  "name": "Jocelyn Doe",
  "age": 100,
  "city": "San Antonio"
}, {
  "name": "Jesse Doe",
  "age": 105,
  "city": "San Jose"
}, {
  "name": "Jasmine Doe",
  "age": 110,
  "city": "San Francisco"
}, {
  "name": "Jasper Doe",
  "age": 115,
  "city": "New York"
}, {
  "name": "Jade Doe",
  "age": 120,
  "city":"Los Angeles"
}]`;


// const jsonString = JSON.stringify(person);
// console.log(jsonString);

const parsedData = JSON.parse(jsonPerson);
console.log(jsonPerson);


// // Fetching data from JSON file
// fetch("73-people.json")
//   .then(Response => Response.json())
//   .then(values => values.forEach(value => console.log(value)))
//   .catch(err => console.log(err));