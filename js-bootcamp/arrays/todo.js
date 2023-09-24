const todo = [
    'Learn Javascript',
    'Freshing up',
    'Practice piano',
    'Go to work',
    'Go to online class'
]

todo.splice(2, 1)
todo.push('The new end item')
todo.shift()

// console.log(`You have ${todo.length} todos`)

todo.forEach(function (item, index) {
    // console.log(`${index + 1}. ${item}`)
})

// the same with forEach
for (let count = 0; count < todo.length; count++) {
    // console.log(`${count + 1}. ${todo[count]}`)
}