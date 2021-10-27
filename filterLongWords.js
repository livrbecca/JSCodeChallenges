function filterLongWords(sentence, n) {
  return sentence.split(" ").filter((word) => word.length > n);
}

console.log(filterLongWords("well hello there how ois everyone tofay oops ive done typos in this loooooong ish sentence!", 5))