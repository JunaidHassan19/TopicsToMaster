/*
   String slicing = creating a substring from a 
                    portion of another
                    string.
                    
                    string.slice(start, end)
*/

  {
  /*
  const fullName = 'Java Script';

  let firstName = fullName.slice(0, 4);
  console.log(firstName);

  let lastName = fullName.slice(4, 10);
  console.log(lastName);

  let firstChar = fullName.slice(0, 1);
  console.log(firstChar);

  let lastChar = fullName.slice(-1);
  console.log(lastChar);
  */

  /*
  const fullName = 'The JavaScript';

  let firstName = fullName.slice(0, fullName.indexOf(' '));
  let lastName = fullName.slice(fullName.indexOf(' ') + 1);

  console.log(firstName);
  console.log(lastName)
  */
}

const email = "thejunni01@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extention = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extention);