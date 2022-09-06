let myBook = {
    title: '1984',
    author: 'Chinua Achebe',
    pageCount: 400
}

console.log(`${myBook.title} by ${myBook.author} with ${myBook.pageCount} pages`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author} with ${myBook.pageCount} pages`)

let individual = {
    name: 'Andrew',
    age: 27,
    location: 'Philodolphia'
}

console.log(`${individual.name} is ${individual.age} and lives in ${individual.location}.`)

individual.age++

console.log(`${individual.name} is ${individual.age} and lives in ${individual.location}.`)