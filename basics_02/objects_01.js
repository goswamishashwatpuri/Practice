let arr = [1,2,3,4,5]
let name1 = "puri"

// [] square brackets for existing variables, e.g. [name1]
// without square brackets for string type key. e.g "age"
let obj1 = new Object({
    [name1]: "Shashwat",
    age: 24,
    isLoggedin: false,

    [arr]: arr,
    fun: "hi"
})

// same output, they refer to same KEY in obejct.
console.log(obj1["puri"]);
console.log(obj1[name1]);


// making an object freeze
// Object.freeze(obj1)
obj1.age = 45
console.log(obj1.age);

// adding new key to object
obj1.fun = function() {
    console.log(`Helllllo, have fun!!! ${obj1[name1]}`);
}

obj1.fun();