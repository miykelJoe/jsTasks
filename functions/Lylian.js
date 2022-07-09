
function firstLetter( name ){
let mainName = name

    if (typeof mainName === 'string'){
        mainName = mainName[0].toUpperCase()    
    }return mainName
}
a = firstLetter('gas')

let result = a + ' is the first letter of your name.'
console.log(result)