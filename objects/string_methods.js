let fullName = '   Matt Evergreen'

// Length property
console.log(fullName.length)

// convert to uppercase
console.log(fullName.toUpperCase())

// convert to lowercase
console.log(fullName.toLowerCase())

// includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// trim
console.log(fullName.trim())

// Challenge area
// function isValidPassword
// length is more than 8 - does not contain the word 'password'

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

// fail
console.log(isValidPassword('asdf'))

// true
console.log(isValidPassword('asdfqwerew*qw'))

// false
console.log(isValidPassword('asdfngkalsgfaspassword'))