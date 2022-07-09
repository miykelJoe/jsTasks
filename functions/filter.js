const arrayOfNames = [
    'mary',
    'john',
    'matthew',
    'gideon'
  ]





  function filterNamesByCharacter( array , character){
  
      if( !character || character.length !== 1 )
        throw new Error('charcater requires just one string letter!')
    
    const filtered = []
    
    for( let i = 0; i < array.length; i++){
        if( array[i][0] === character){
          filtered.push( array[i] )
      }	
    }
    
    if( filtered.length === 0) return null 
      
    return filtered 
  }
  
  
  const filteredArray = filterNamesByCharacter( arrayOfNames, '4')
  console.log(filteredArray)