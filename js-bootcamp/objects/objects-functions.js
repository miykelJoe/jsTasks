let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 400
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
    
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(otherBookSummary.summary)

//Challenge

let temperature = 74
let allTemp = function (temp){
    return {
        fahrenhiet: `${temp}`,
        celsius: `${(temp - 32) * (5/9)}`,
        kelvin: `${(temp + 459.67) * (5/9)}`
    }
}

let temps = allTemp(temperature)
console.log(temps.kelvin)