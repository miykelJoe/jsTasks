
let gradeCalc = function(studentScore, totalPossibleScore = 100){

    let scorePercent = (studentScore / totalPossibleScore) * 100

    let grade = ''
    if (scorePercent <= 59){
        grade = 'F'
    }  else if (scorePercent <= 69){
        grade = 'D'
    } else if (scorePercent <= 79){
        grade = 'C'
    } else if (scorePercent <= 89){
        grade = 'B'
    } else if (scorePercent <= 100){
        grade = 'A'
    } else {
        grade = 'Invalid'
        scorePercent = ''
    }

    return  `You got a ${grade} (${scorePercent}%)!`
}

let score = gradeCalc(68, 10)

console.log(score)

let percentCalc = function(percent, total = 2000){

    let per = percent / 100
    let result = per * total
    return result
}

let realScore = percentCalc(80, 20)

console.log(realScore)