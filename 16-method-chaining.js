/*
----- Method Chaining = Calling one method after another
                        in one continuous line of code.----
*/ 


let userName = window.prompt('Enter your username');

// ---- NO METHOD CHAINING ----
/*
userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLocaleLowerCase();
userName = letter + extraChars;

console.log(userName);
*/

// ---- METHOD CHAINING ----

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLocaleLowerCase();

console.log(userName);