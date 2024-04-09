// 2 types of datatypes
// Primitive and Non primitive (also called reference)

// Primitive -> number, bigInt, boolean, string, undefined, null, symbol
// non proimitive -> Object, Function, Array

// numbers
let num1 = 12
let num2 = 12.00000001
let num3 = 1.00000001

// floating point arthematic is not 100% accurate in JS
console.log(num2+num3);

// bigInt -> put n after a number
let bInt = 1235402321n

// Cant perform arthmatic of BigInt with a Number
// console.log(bInt*num1);

let x = null;
// type of null is an object
console.log(typeof x);

// symbols
let sym1 = Symbol(num1)
console.log(sym1);

const sym2 = Symbol(num1)
console.log(sym2);

// even though the O/P value of symbol is same, tthey're NOT EQUAL
// each symbol is unique
console.log(sym1 === sym2);

// symbols can be reassigned.
sym1 = 1222
console.log(sym1);


// functions
let fun = function (inp = 12) {
    console.log(inp);
}

// type of this function is - [Function: fun]
console.log(fun)

fun(1222)

