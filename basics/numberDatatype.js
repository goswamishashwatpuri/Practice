let num = 54;

// You'll get no error on this line, but it'll not be a number.
// here num1 is NaN (Not A Number)
let num1 = 45/"sa"

// but this will be a valid string -> 54lorem
num1 = num+"lorem"

console.log(num1)


// bigint
let bignum = 100n

// output -> 1235
console.log(bignum + 1n)

// console.log (bignum + 12314) -> error: can't mix number and bigint together.

let smallnum = 100

//convert smallnum to a BigInt type explicitly
smallnum = BigInt(smallnum)

// now we can add them without error.
console.log(smallnum + bignum);


let impure = "1234as"

// IMP > type will be changed to number, but the value will be NaN
let num3 = Number(impure)
console.log(typeof num3)
console.log(num3);