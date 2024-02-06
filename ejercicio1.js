const getRandomNumber=()=>{
    let randomNumber= Math.floor(Math.random()*100)
    let parity= {numeroGenerado: randomNumber, parity:randomNumber%2===0 ? 'par':'impar'}
    return parity
  }
  
  const generateRandomNumbersDetails =()=>{
    let results=[]
    let iterations= 5
   
   for(let i=1; i<= iterations; i++){
    let {numeroGenerado, parity} = getRandomNumber()  
    results.push( {'iteración': i, 'Numero generado': numeroGenerado,'Paridad': parity})
      }
    console.log(results)  
    return results  
  }
  
  generateRandomNumbersDetails()