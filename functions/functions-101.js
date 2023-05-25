// Function - input, code, output

let greetUser = function (name) {
    console.log('Welcome ' + name)
}

greetUser('Matt')

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
console.log(value)
value = square(10)
console.log(value)


// Challenge

let convertFahrenheitToCelcius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5/9)
    return celsius
}

let temperature = convertFahrenheitToCelcius(32)
console.log(temperature)
temperature = convertFahrenheitToCelcius(68)
console.log(temperature)