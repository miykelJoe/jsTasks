// CAMEL CASING
const sentence = 'mAn ChEster UniTed'

function camelCasing( sentense ){
  let newSentence = ''

  for(let i = 0; i < sentense.length; i++){
      
    if (i === 0){
      newSentence += sentense[i].toLowerCase()
    }else if(sentense[i - 1] === ' '){
      newSentence += sentense[i].toUpperCase()
    }else if (sentense[i] !== ' '){
      newSentence += sentense[i].toLowerCase()
    }else if(sentense[i] === ' '){
      newSentence += ''
    }
}return newSentence
}
 console.log(camelCasing(sentence))
// -----------------------------------------------

//SENTENCE CASING

let sentenc = 'hoW are you';

function sentenseCase( sentence ){
  let newSentence = new String()

  for( let i in sentence ){
    const letter = sentence[i]
    const prvLetter = sentence[ i - 1]

    if( i == 0 || prvLetter === ' ' ){
      newSentence += letter.toUpperCase()
      continue;
    }
    newSentence += letter.toLowerCase()
  }
  console.log( newSentence )
  return newSentence
}
sentenseCase(sentenc)

const secondSentence = "hello how are you!"





function sentenceCase(value){
  let newSentence = ''

  for(let i = 0; i < value.length; i++){
    const letter = value[i]

    if(i === 0){
      newSentence += letter.toUpperCase()
      continue;
    }else if((value[i-1]) === ' '){
      newSentence += letter.toUpperCase()
      continue;
    }
    newSentence += letter
  }return newSentence
}
console.log(sentenceCase(secondSentence))