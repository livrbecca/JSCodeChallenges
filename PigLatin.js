function pigIt(str){
    let splitArr = str.split(" ")
    res = []
      splitArr.map((word)=>{
        const firstLetter = word.split("")[0]
        const wordRemainder = word.slice(1)
         const format = `${wordRemainder}${firstLetter}ay`
       res.push(format)
      })
     return res.join(" ").replace("!ay", "!").replace("?ay","?")
    }
    
    // psedud code
    // take first index of letter, save in variable
    // slice the rest of the word
    // word + variableName + ay
    // leave punctuation untouched