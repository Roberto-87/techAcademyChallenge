const changeToMay=(text)=>{
    let characterToConvert=[]
     
    for(character of text){
       if(characterToConvert.includes('.')) {
        characterToConvert.push(character)
      } else{
        characterToConvert.push(character.toUpperCase())
      } 
    }return characterToConvert.join('')
  }
  
  let entrada=  'www.techacademy.com'
  console.log(`entrada: ${entrada}`)
  console.log(`salida: ${changeToMay(entrada)}`)
  