function greet(name) {
  return `hello ${name}`;
}

greet("olivia");


function isFirstWordLonger(firstString, secondString) {
  if (firstString.length > secondString.length) {
    return true;
  } else {
    return false;
  }
}

console.log(isFirstWordLonger("f", "no"));
