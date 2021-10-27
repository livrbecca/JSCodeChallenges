function reverseWords(str){
 // split, reverse, join, dont forget ("")
  return str.split(" ").reverse().join(" ")
}

console.log(reverseWords("whats up doc!"))