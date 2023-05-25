// Global scope (convertFahrenheitToCelcius, temperature)
    // Local scope (celcius, fahrenheit)
        // Local scope (isFreezing)


let convertFahrenheitToCelcius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5/9)
    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}

let temperature = convertFahrenheitToCelcius(32)
console.log(temperature)
temperature = convertFahrenheitToCelcius(68)
console.log(temperature)