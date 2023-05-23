// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined within a code block

let varOne = 'varOne' // Global Scope

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo' // Local Scope
    console.log(varTwo)
    
    if (true) {
        let varFour = 'varFour' // Local Scope
        console.log(varTwo)
    }
}

if (true) {
    let varThree = 'varThree' // Local Sope
}