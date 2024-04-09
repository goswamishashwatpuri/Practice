// Math.random give random values b/w 0 to 1
// here I've created a random number generator b/w 0 to 6
let randomDiceNum = Math.round( 
    (((Math.random()*10))/10)*6
)

let possibleOutcomes = [0,0,0,0,0,0,0]

// analyzed how many times each number comes upon 100 rolls.
for (let i = 0; i < 100; i++) {
    randomDiceNum = Math.round( 
        (((Math.random()*10) )/10)*6
    )
    console.log(randomDiceNum)
    possibleOutcomes[randomDiceNum] += 1 
}
console.log(possibleOutcomes)