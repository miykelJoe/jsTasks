
function stringCase(strValue, type) {
    let newSentence = ''

    if (type === 'camelCasing') {
        for (let i = 0; i < strValue.length; i++) {

            if (i === 0) {
                newSentence += strValue[i].toLowerCase()
            } else if (strValue[i - 1] === ' ') {
                newSentence += strValue[i].toUpperCase()
            } else if (strValue[i] !== ' ') {
                newSentence += strValue[i].toLowerCase()
            } else if (strValue[i] === ' ') {
                newSentence += ''
            }
        }
    }else if(type === 'SentenceCasing') {
        for(let i = 0; i < strValue.length; i++){
            const letter = strValue[i]
        
            if(i === 0){
              newSentence += letter.toUpperCase()
              continue;
            }else if((strValue[i-1]) === ' '){
              newSentence += letter.toUpperCase()
              continue;
            }
            newSentence += letter
          }
    } else if(type === 'snake_casing') {
        for (let i = 0; i < strValue.length; i++) {

            if (i === 0) {
                newSentence += strValue[i].toLowerCase()
            } else if (strValue[i - 1] === ' ') {
                newSentence += strValue[i].toLowerCase()
            } else if (strValue[i] !== ' ') {
                newSentence += strValue[i].toLowerCase()
            } else if (strValue[i] === ' ') {
                newSentence += '_'
            }
        }
    } else if(type === 'harshtagged') {
        let sentence = ''
        // for (let i = 0; i < strValue.length; i++) {

        //     if (i === 0) {
        //         sentence += strValue[i].toLowerCase()
        //     } else if (strValue[i - 1] === ' ') {
        //         sentence += strValue[i].toLowerCase()
        //     } else if (strValue[i] !== ' ') {
        //         sentence += strValue[i].toLowerCase()
        //     } else if (strValue[i] === ' ') {
        //         sentence += ''
        //     }
        // }
        return '#' + strValue.split(" ").join('').toLowerCase()
        
    }
    return newSentence
}


const statement = 'be pRepared';

console.log(stringCase(statement, 'camelCasing'))
console.log(stringCase(statement, 'SentenceCasing'))
console.log(stringCase(statement, 'snake_casing'))
console.log(stringCase(statement, 'harshtagged'))
