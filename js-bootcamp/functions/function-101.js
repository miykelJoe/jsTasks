let greetUser = function(){
    console.log('Welcome')
}

greetUser()
greetUser()

let square = function (num){
    let result = num * num
    return result
}

console.log(square(5))

let FahToCelsius = function(fehrenheit){
    let celsius = (fehrenheit - 32) * (5/9)
    return celsius
}

let firstTemp = FahToCelsius(32)
let secondTemp = FahToCelsius(68)

console.log(firstTemp)
console.log(secondTemp)