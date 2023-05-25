// take in students score and total possible score
// generate letter grade and percentage
// You got a *letterGrade* (*percentage*).
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalculator = function (studentScore, totalScore) {
    let letterGrade = ''
    if (100 >= studentScore && studentScore >= 90) {
        letterGrade = 'A'
    } else if (89 >= studentScore && studentScore >= 80) {
        letterGrade = 'B'
    } else if (79 >= studentScore && studentScore >= 70) {
        letterGrade = 'C'
    } else if (69 >= studentScore && studentScore >= 60) {
        letterGrade = 'D'
    } else if (59 >= studentScore && studentScore >= 0) {
        letterGrade = 'F'
    } else {
        return `${studentScore} is invalid, please enter a value between 0 and ${totalScore}`
    }
    if (letterGrade === 'A' || letterGrade === 'F'){
        return `You got an ${letterGrade} (${(studentScore / totalScore) * 100})`
    } else if (letterGrade != 'A' || letterGrade != 'F') {
        return `You got a ${letterGrade} (${(studentScore / totalScore) * 100})`
    }
}

let studentGrade = gradeCalculator(92,100)
console.log(studentGrade)

studentGrade = gradeCalculator(83,100)
console.log(studentGrade)

studentGrade = gradeCalculator(71,100)
console.log(studentGrade)

studentGrade = gradeCalculator(66,100)
console.log(studentGrade)

studentGrade = gradeCalculator(41,100)
console.log(studentGrade)

studentGrade = gradeCalculator(106,100)
console.log(studentGrade)