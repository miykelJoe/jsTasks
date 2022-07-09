let figure = 0;

function counter( anyNumber ){
 
 
 if(anyNumber === 'increment'){
  figure++
  }else if(anyNumber === 'decrement'){
  figure--
  } 
 return figure
}

console.log(counter('increment'))
console.log(counter('increment'))
console.log(counter('increment'))
console.log(counter('decrement'))
console.log(counter('decrement'))
console.log(counter('decrement'))
console.log(counter('decrement'))
console.log(counter('decrement'))