let myName = "Shashwat"

const displayName = function (myName1) {
    console.log(`My name is ${myName1}. And I love icecream`);

    //this variable is called implicit global variable declaration - accessable outside function as well.
    myDescription = "I identify as a man. (the pronoun pandemic)"
}

displayName(myName)

// accessing string characters

// backward accessing not possible - O/P - Undefined
console.log(myName[-1]);

// simple array like accessing
console.log(myName[1]);

// stringgs are immutable, i.e you can't change character by chatacter
myName[1] = "W"
// output still remains "h", not W. (but you'll see no error)
console.log(myName[1]);

// but variables can be assigned to new string
myName = "Shashwat Puri "
console.log(myName);

myDesc = "3 little pups, I met down the road"
console.log(myDescription);

// concating other strings
console.log(myName.concat("Goswami", "lorem", "ipsum"))

let surname = myName.concat("Goswami")
console.log(surname);

// split
console.log(myDesc.split(" "), typeof myDesc); // typeof myDesc => String 

// splitting the array using a separator and storing it in an array.
let sampleArr = myDesc.split(" ")
console.log(sampleArr, typeof(sampleArr)); // typeof sampleArr => object

// multiline string - using `...` (backticks)
let multiLine = `this is first line
this is second line
this is 3rd line.`

console.log(multiLine);

// string objects
let strObj = new String('this is string obj')

// object
console.log(typeof strObj);
// string
console.log(typeof myDesc);