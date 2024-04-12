let obj1 = {
    1: "hi",
    2: "Hello",
    3: "Bye"
}
let obj2 = {
    4: "hi",
    5: "Hello",
    6: "Bye"
}
let obj3 = {
    7: "hi",
    8: "Hello",
    9: "Bye"
}

// first parameter is target, rest are sources
// good practice to pass an empty object in first parameter.
let Obj4 = Object.assign ({}, obj1, obj2, obj3)
console.log(obj1, Obj4);

// try this as well - 
// here obj1 is also altered, as it's the first param.
let obj5 = Object.assign(obj1, obj2, obj3)

console.log(obj1, obj5);

// this can also be done using spread operator
let obj6 = {...obj1, ...obj2}