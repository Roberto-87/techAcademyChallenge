const reverseArray=(arr)=>{
    let result=[]
    
    for (let i=arr.length-1; i >= 0;i--){
        result.push(arr[i])    
    }
    return result
  }
  
  const originalArray = [23, 5, 34, 56, 98, 'cadena', 7];
  console.log("Arreglo original:", originalArray);
  const invertedArray = reverseArray(originalArray);
  console.log("Arreglo invertido:", invertedArray);