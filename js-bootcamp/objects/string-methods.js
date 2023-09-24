let name = '  Mikel Joe'

//length property
console.log(name.length)

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

let isValidPassword = function(password){
    return password.length > 8 && !password.includes('password')
    

}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc1123gkfiytee7t89'))
console.log(isValidPassword('asdf0394passwords093'))
console.log('_________________')


let min = 10
let max = 11
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min


let makeGuess = function (guess){
    let random = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(random)
    let result
    if(random === guess){
        result = true
    }else{
        result = false
    } return result
    
}

console.log(makeGuess(11))
console.log(randomNum)