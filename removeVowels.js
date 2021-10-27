function disemvowel(str) {
  const arrVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const arrNew = [];
  for (let char of str) {
    if (!arrVowels.includes(char)) {
      arrNew.push(char);
      console.log("str", str);
      console.log("arrNew", arrNew);
    }
  }
  return arrNew.join("");
}

// Test Code
console.log(disemvowel("Apple"), "should be ppl");
// console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
