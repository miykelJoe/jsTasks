


const students = [
    {name: 'Jude Nnamdi Kalu',
    age: '15 years',
    subjects: ['maths', 'eng', 'comp', 'phy'],
    grades: [70, 47, 82, 68]
},
    {name: 'Daniella Mary Chinonso',
    age: '18 years',
    subjects: ['maths', 'eng', 'comp', 'phy'],
    grades: [40, 97, 65, 52]
}
]

function total (array){
    let sum = 0

    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }return sum
}

function average(totalScore, array){
    return totalScore / array.length
}
console.log(average(students[1].grades))
// console.log(total(students[0].grades))