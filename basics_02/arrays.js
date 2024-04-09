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