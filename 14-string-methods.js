// String methods = allows you to manipulate and word with tet (string)

/*
let userName = 'JavaScript';

userName.charAt(0) 
console.log(userName.charAt(0));

userName.indexOf('S');
console.log(userName.indexOf('S'));

console.log(userName.length);

console.log(userName.toUpperCase());

console.log(userName.toLowerCase());

console.log(userName.repeat(5));
*/

let phoneNumber = '0123-456-789';

console.log(phoneNumber);

phoneNumber = phoneNumber.replaceAll('-', '');
console.log(phoneNumber);
/*
phoneNumber = phoneNumber.padStart(20, '0');
console.log(phoneNumber);
*/

phoneNumber = phoneNumber.padEnd(20, '0');
console.log(phoneNumber);