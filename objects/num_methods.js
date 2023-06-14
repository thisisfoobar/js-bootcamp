let num = 124.327

// Fix number of decimal places
console.log(num.toFixed(2))

// Round
console.log(Math.round(num))

// Round down
console.log(Math.floor(num))

// Round up
console.log(Math.ceil(num))

// random number between 0 and 1
console.log(Math.random())

// generate random number between 10 and 20
let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)

// Challenge area
// function - take in persons guess, check against random number between 1 - 5

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    return Math.floor(Math.random() * (max - min + 1)) + min === guess
}
console.log(makeGuess(2))
