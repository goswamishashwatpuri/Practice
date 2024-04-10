// Arrys can contain multiple datatypes
let arr1 = [
    { one: 12, two: 24, three: [0,10,2] }, 
    "puri", 
    "goswami"
]

console.log(arr1[0]["two"])

// assigning one array to another variable creates shallow copy by default.
let sampleArr1 = [1,2,3, true, "Shashwat"]
let sampleArr2 = sampleArr1

// changes will reflect in both arrays
sampleArr1[0] = "lorem"

console.log(sampleArr1, sampleArr2)

// creating an array object
let arrObj = new Array(1,2,3,4,"sample",5,6,7)
console.log(arrObj);

// push op
arrObj.push("new element 1")

// pop removes last value in array
arrObj.pop()

//  Shift - opposite of pop. removes 1st element of the array.
arrObj.shift()
console.log(arrObj);

// includes - check if element exists in array - Boolean output
console.log(arrObj.includes(4))

// indexOf - returns index of an element. If doesn't exist, then returns -1
console.log(arrObj.indexOf("sample"))


// this converts an array to a comma separated element based string
let sampleJoin = arrObj.join()

// IMPORTANT: typeof sampleJoin -> STRING
console.log(typeof sampleJoin);

let tempArr = [1,2,3,4,5,6,7,8,9,10]

// slice. range type -> [) . Meaning 1st (start) element index included. 2nd (end) element NOT included.
// not change in ORIGINAL ARRAY.
let sliceArr = tempArr.slice(1,3)

// splice
// IMPORTANT: Splice changes ORIGINAL ARRAY as well. Spliced elements are removed from original array.
let spliceArr = tempArr.splice(1,3)
console.log(sliceArr, spliceArr, tempArr)

