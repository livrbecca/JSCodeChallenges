function spinWords(str) {
  const splitWords = str.split(" ");
  const arr = [];
  //const newARR = [];

  splitWords.forEach((word) => {
    if (word.length >= 5) {
      const splitString = word.split("").reverse().join("");
      arr.push(splitString);
    } else {
      arr.push(word);
    }
  });
  const result = arr.join(" ");
  return result;
}

console.log(spinWords("Hello my name is Olivia or Liv"));
