const ar = 'here we are';

eachWord = ''


  for (let i = 0; i < ar.length; i++){
    if (ar[i] !== ' '){
      eachWord += ar[i]
  }else if(ar[i] === ' '){
    ar[i].toUpperCase()
  }
  
}

console.log(eachWord)

















// d = '';

// for (i = 0; i < ar.length; i++){
// if (ar[i] !== ' '){
//   d += ar[i]
// }else{
//   d += ' hgdtdxmytkrsm '
// }
// }

// console.log(d)