/*

ES6 Modules = An external file that contains reusable code.
             that can be imported into other JavaScript files.
             Write resusbale code for many different projects.
             can contain variables, functions, classes, etc.
             inttroduced as part of ECMAScript 2015 update.
             
*/

import{PI, getCicumference, getArea, getVolume} from './55-mathUtil.js'; // import the entire module

console.log(PI);
const circumference = getCicumference(5);
console.log(`${circumference.toFixed(2)}cm`);

const area = getArea(5);
console.log(`${area.toFixed(2)}cm2`);

const volume = getVolume(5);
console.log(`${volume.toFixed(2)}cm3`);