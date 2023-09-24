let num = 103.941

console.log(num.toFixed(1))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)

//Challenge
let guessGame = function (guess){
    let mini = 1
    let maxi = 5
    let answer = Math.floor(Math.random() * (maxi - mini + 1)) + mini
    return answer === guess
}

let result = guessGame(4)
console.log(result)