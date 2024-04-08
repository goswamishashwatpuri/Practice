// the result is a number
console.log(1+2+2);
console.log(typeof(1+2+2));

// the result is a string
console.log("1"+"2"+"3");
console.log(typeof("1"+"2"+"3"));

// IMP - The result is a string (from Left-Right, first operand "1" is string)
console.log("1"+2+2);
console.log(typeof("1"+2+2));

// IMP - The result is a Num (frim LtoR, first operand is Num then Num then string)
console.log(1+2+"2");
console.log(typeof(1+2+"2"));

// Converstion optput here is string
console.log(typeof(true+""));
