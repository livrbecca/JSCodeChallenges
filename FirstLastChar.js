function removeChar(str) {
  let newString = [];

  for (let i = 1; i < str.length - 1; i++) {
    const result = str[i];
    newString.push(result);
  }
  const joinedStr = newString.join("");
  return joinedStr;
}

console.log(removeChar("Academy"));
