let name = 'Matt'

if (true) {
    let name = 'Mike'
    if (true) {
        name = 'Jen'
        word = 'samezies'
        console.log(name) // result is Jen because Variable Shadowing
        console.log(word) // result is samezies
    }
}

if (true) {
    console.log(name) // result is Matt
    console.log(word) // result is samezies due to Leaked Globals
}