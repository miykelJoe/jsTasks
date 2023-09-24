// _________________________________
const note = [{
    title: 'Walk out',
    body: 'Work on stamina'
},{
    title: 'Market',
    body: 'Buy groceries'
},{
    title: 'Visit the saloon',
    body: 'Shave'
}]


const findNote = (notes, noteTitle) => {
    const index = notes.findIndex( (note) => {
        return note.title === noteTitle
    })
    return notes[index]
}
const notes = findNote(note, 'Walk out')
console.log(notes)




let index = note.findIndex(function (notes){
    return notes.title == 'Market'
})

// _________________________________