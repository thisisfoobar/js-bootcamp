let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

// name, age, location

let personInfo = {
    name: 'Matt',
    age: 29,
    location: 'Mountains'
}

console.log(`${personInfo.name} is ${personInfo.age} and lives in the ${personInfo.location}`)

personInfo.age = personInfo.age + 1

console.log(`${personInfo.name} is ${personInfo.age} and lives in the ${personInfo.location}`)
