// Number to words


function numToWords (fig){
    let figWord = ' '
    
        if(fig === 1){
            figWord = 'one'
        }else if(fig === 2){
            figWord = 'two'
        }else if(fig === 3){
            figWord = 'three'
        }else if(fig === 4){
            figWord = 'four'
        }else if(fig === 5){
            figWord = 'five'
        }    return figWord
}console.log(numToWords(1))

// if(fig = 1, 2, 3, 4, 5){
//     figWord += 'one', 'two', 'three', 'four', 'five'
// }
//    return figWord
// }console.log(numToWords(2))