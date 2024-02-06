const countRepeated=(text, character)=>{
    let count=0
    
      for(let i=0; i<text.length;i++){
         if (text[i]===character) {
          count++
        }
      }
      console.log( `el carácter "${character}" se repite ${count} veces en
      "${text}"`)    
      return count
      
    }

    countRepeated('hola como estas', 'o')