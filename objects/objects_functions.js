let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.summary)

// Challenge area
// input Farenheit and return object with Farenheit, Celcius and Kelvin

let tempConverter = function (farenheit) {
    return {
        fTemp: `Farenheit: ${farenheit}`,
        cTemp: `Celcius: ${(farenheit - 32) * (5/9)}`,
        kTemp: `Kelvin: ${(farenheit + 459.67) * (5/9)}`
    }
}

let temperature = tempConverter(32)

console.log(temperature.fTemp)
console.log(temperature.cTemp)
console.log(temperature.kTemp)