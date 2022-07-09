const ar = [
    'mary',
    'john',
    'matthew',
    'gideon'
  ]
 

function filter (filt){
  filt = filt.toLowerCase()
  let name = []

  if (filt.length > 1 || filt.length < 1)
  name.push('Input must not be empty and must one character alone.')
  if(typeof filt !== 'string')
  name.push('Input must be a string')
  for (i = 0; i <  ar.length; i++){
  
    if(ar[i][0] === filt){
      name.push(ar[i])
    }
  } if (name.length === 0){
    name.push('Does not exist')
  }
    return name
}

console.log (filter('M'))