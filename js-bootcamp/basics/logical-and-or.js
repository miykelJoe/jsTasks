let temp = 65

if (temp >= 60 && temp <= 90 ){
    console.log('It is pretty nice out')
}else if(temp <= 0 || temp >= 120){
    console.log('Do not go outside')
}else {
    console.log('Do what you want')
}

// Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer up Vegan dishes.')
}else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer up some Vegan options.')
}else{
    console.log('Offer up anything on the menue')
}