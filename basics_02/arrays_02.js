let arr1 = [1234,"shashwat", "puri", "goswami"]
let arr2 = [1,2,3,["lorem","ipsum","dolor",["another array", "1234"]]]

// using spread to a new string/string object only parses 0th index into string.
let test = new String(...arr1)
console.log(test)

let test2 = [...arr1]
console.log(test2)

// flatens out any recursive amount of arrays within an array. Arguement - # of depth
let arr3 = arr2.flat(Infinity)
console.log(arr3);

// concat - joins one (or more) array with another and returns a new array.
let arr4 = arr2.concat(arr1, arr3)
console.log(arr4);

// creating an array of multiple objects/entities
let s1=1, s2=2, s3=3, s4=4, s5=5
let newArr = Array.of(s1,s2,s3,s4,s5)
console.log(newArr);
