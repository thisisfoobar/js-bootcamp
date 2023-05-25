let add = function (a, b, c) {
    return a + b + c
}

let result = add(1, 2, 4)
console.log(result)

// Default arugments
let getScoreText = function (name = 'Player1234', score = 0) {
    //return 'Name: ' + name + ' | Score: ' + score
    return `Name: ${name} | Score: ${score}`
}

let scoreText = getScoreText(undefined, 120)
console.log(scoreText)

// Challenge - Tip Calculator
// Added challenge
// A 25% tip on $40 would be $10
let calculateTip = function (total, tipPercent = .2) {
    //let percentage = tipPercent * 100
    //let tipAmount = tipPercent * total
    return `A ${tipPercent * 100}% tip on $${total} would be $${tipPercent * total}`
}

let totalTip = calculateTip(100, .3)
console.log(totalTip)

totalTip = calculateTip(100)
console.log(totalTip)

// Template strings
let name = 'Matt'
console.log(`Hello ${name}`)