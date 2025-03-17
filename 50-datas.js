/*

    Date objects = Objects that contain values that represent dates and times These data objects can be changed and formatted.
  

*/

// const date = new Date ();
// console.log(date);

/*
// Date(yesr, month, day, hours, minutes, seconds, milliseconds)
const date = new Date (2025, 2, 24, 7, 30, 15, 0);

console.log(date);
*/

/*
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();
const dayOfWeek = date.getDay();
const monthName = date.toLocaleString('default', {month: 'long'});
const dayName = date.toLocaleString('default', {weekday: 'long'});

console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);
console.log(dayOfWeek);
console.log(monthName);
console.log(dayName);
*/


const  date1 = new Date('2025-02-24');
const  date2 = new Date('2025-02-25');

if(date2 > date1) {
    console.log('Date2 is greater than Date1');
}