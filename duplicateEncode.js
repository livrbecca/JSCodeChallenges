// METHOD ONE, IF STATEMENT

const duplicateEncode = (word) => {
  word = word.toLowerCase();
  console.log("word:", word);

  const resultArray = [];

  for (let index = 0; index < word.length; index++) {
    if (word.indexOf(word[index]) === word.lastIndexOf(word[index])) {
      resultArray.push("(");
    } else {
      resultArray.push(")");
    }
  }
  return resultArray.join("");
};
console.log(duplicateEncode("Olivia"));

// METHOD TO: TURNERY OPERATOR / APPEND TO STRING
// const duplicateEncode = (word) => {
//   word = word.toLowerCase();
//   let result = "";

//   for (let index = 0; index < word.length; index++) {
//     result +=
//       word.indexOf(word[index]) === word.lastIndexOf(word[index]) ? "(" : ")";
//   }
//   return result;
// };

// console.log(duplicateEncode("Rebecca"));

// index working out.


// word = word.toLowerCase()
// let result = ""  - empty string, will append ( or ) to it later

// for loop
// iterate over each letter in word; stop after word-length
    // for (index = 0; index < word.length; index++)
    
// if indexOf and lastIndexOf have the same number, the letter ISN'T repeated, append ( to result
// if indexOf !== lastIndexOf, means it has more than one index and IS repeated, append ) to result



//--------------------------------------------------------------------------------------------------
// console.log("word.indexOf(word[i]):", word.indexOf(word[i]))
// console.log("word.lastIndexOf(word[i]):", word.lastIndexOf(word[i]))

// indexOf vs lastIndexOf:
// O L I V I A.indexOf(i)

// index of O - 0
// last index of O - also 0

// index of L - 1
// last index L - also 1

// midway conclusion, if indexOf === lastIndexOf, its NOT a repeated letter

// index of I - 2
// last index I -4,
// indexOf !== lastIndexOf, means its a repeated letter

// index of V - 3
// last index V - also 3

// index of I - its first index was at position 2, so 2
// last index I - 4 (current one)

// index of A - 5
// last index A - also 5
