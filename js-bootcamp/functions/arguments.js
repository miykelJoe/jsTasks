

let add = function(a, b, c) {
    return a + b + c
}

// let result = add(10, 4, 5)
// console.log(result)

let getScoreText = function(name = 'Anonymous', score = 0){
    return `Name: ${name} - Score: ${score}`
    // return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//Challenge area
// A 25% tip on $40 would be $10
let getTip = function(total, tipPercent = (.2)) {
    let result = total * tipPercent
    let tip = tipPercent * 100
    let string = `A ${tip}% tip on $${total} would be $${result}`
    return string
}
let price = getTip(10)


console.log(price)