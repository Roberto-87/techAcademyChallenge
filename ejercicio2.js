const multiples=(num)=>{  
  let i=1
  let originalNum= num
  
  while(i<= 100){
    num= originalNum*i 
    console.log(num)
    i++
  }
}

multiples(2)