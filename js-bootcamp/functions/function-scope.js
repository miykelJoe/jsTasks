

let FahToCelsius = function(fehrenheit){
    let celsius = (fehrenheit - 32) * (5/9)
    return celsius
}

let firstTemp = FahToCelsius(32)
let secondTemp = FahToCelsius(68)

console.log(firstTemp)
console.log(secondTemp)