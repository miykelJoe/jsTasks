


const students = [
    {
        grade: [57, 60, 79, 80],
        gradeSchema: ['math', "eng", "geo", "phy"],
        name: "Samuel",
        gender: "Male"
    }, 
    {
        grade: [30, 50, 40, 90],
        gradeSchema: ['math', "eng", "geo", "phy"],
        name: "Mike",
        gender: "Female"
    }
]
console.log(students[1].name)

function total( arrayOfNumber ){
    let sum = 0

    for( let i = 0; i < arrayOfNumber.length; i++ ){
        sum += arrayOfNumber[i]
    }

    return sum
    // return stores data to the function, making the function behave like a variable.
}

function average( arrayOfNumber , totalScore ){
     return  totalScore / arrayOfNumber.length
}

function score( average, name , cutOff ){
    // return average >= 60?  name + " Passed" : name + " Failed"

    if( average >= 60 ){
        return name + " Passed"
    }else{
        return name + " Failed"
    }

}

for( let i = 0; i < students.length; i ++){

    const tots = total(  students[i].grade )
    const avg = average( students[i].grade  ,   tots  )
    const performance = score( avg ,  students[i].name   , 60 )

    // console.log( `${performance} with a total of ${tots} and an average of ${avg}` )

}


const myNumb = total(  [556,45,56,45] )
// console.log(myNumb)



// exploring the return keyword 


function data( value , raisedTo){
    

    return value *  raisedTo
}

const sum  = 5 + data( 5 , 6)
const power = data(56543 , 70 )

console.log( sum , power )


const student = {
    name: "Paul Ezekiel Hart",
    age: 50,
    favColor: "black",
    printName: function(){
        console.log( this.name )
    }
}

student.printName()
