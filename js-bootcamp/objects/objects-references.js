let myAccount = {
    name: 'Mikel Joe',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount){
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount){
    account.income = account.income + amount
}

let resetAccount = function (account){
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses. `
}



addIncome(myAccount, 500)
addExpense(myAccount, 359)
addExpense(myAccount, 50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

let text = '  mikel joe';



console.log(splice(text, 1))