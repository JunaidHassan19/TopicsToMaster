/*

Error = An object that is created to represent a problem that occurs occur often with user input or establishing a connecion.

Error Handling = The process of catching errors and preventing them from crashing a program.

try {}= A block of code that will be tested for errors while it is being executed.
  
catch {}= A block of code that will run if an error occurs in the try block.
  
finally {}= A block of code that will always run after the try and catch blocks, regardless of whether an error occurred.

*/
/*
try {
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTIONS
    // SECURITY ERRORS
    // SYNTAX ERRORS
}
catch (error) {
    console.error(error);
}
finally {
  // CLOSE FILES
  // CLOSE CONNECTIONS
  // RELEASE RESOURCES
  console.log('This will always run!');
}


console.log('You are awesome!');
*/

try{
  const dividend = Number(window.prompt('Enter the dividend: '));
  const divisor = Number(window.prompt('Enter the divisor: '));

  if (divisor === 0) {
    throw new Error('The divisor cannot be zero!');
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error('Please enter a valid number!');
  }

  const result = dividend / divisor;
  console.log(`The result is: ${result}`);
}
catch (error) {
  console.error(error);
}

console.log('You are awesome!');