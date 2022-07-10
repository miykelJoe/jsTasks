let text = 'a b c';


let noSpace = '';

for (let i = 0; i < text.length; i++){
if (text[i] !== ' '){
 noSpace += text[i]
}else if (text[i] === ' '){
    noSpace += ''
}
}
console.log(noSpace)