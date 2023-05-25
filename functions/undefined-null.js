let name = 'Jen'

if (name === undefined) {
    console.log('Pleae provide a name')
} else {
    console.log(name)
}


// Undefined for function arguments
let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result) // Undefined

// Use null to clear out variables, undefined is a language default
let age = 29
age = null
console.log(age)