
    let arrayOfNames = ['MIKE', 'JOY', 'JADE', 'JOHNNY', 'JAX']
    
    
    function nameExist(names){
        names = names.toUpperCase()
        let nameExist = false
        
        for (let i = 0; i < arrayOfNames.length; i++){
            
        if (names === arrayOfNames[i]){
            nameExist = true
            break;
         }
        }
        error = 'Sorry, you do not exist'

        if (nameExist)
        return `${names} exist`
        else
        return error
}
    console.log(nameExist('jax'))