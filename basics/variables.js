// num is declared and initialized
let num = 12

// num1 is declared but not initialized
let num1;

console.log(num, num1);

// declared but uninitialized variables are undefined
console.log(typeof num1);

// can't declare constants alone - SyntaxError: Missing initializer
// const x; --> not possible

// initialize const while declaring
const x = 123+"hello"

// const can't be re-initialized
// x = 123; --> not possible

// Type of variable is defied upon initialization, until then it's undefined
num1 = 'Shashwat'
