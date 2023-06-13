// Create three new functions challenge
// 1. addIncome
// 2. resetAccount (reset the expenses and income to 0)
// 3. getAccountSummary (print a summary of the account)
//     Account for Matt has $900.  $1000 of income. $100 in expenses.

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

let myAccount = {
    name: 'Matt Evergreen',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    // creating a new object will break that bind
    // account = {}

    // the below will manipulate the myAccount object as well
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let getAccountSummary = function (account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} of income. $${account.expenses} in expenses.`    
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

addIncome(myAccount, 1000)
addExpense(myAccount, 200)
addExpense(myAccount, 150)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))