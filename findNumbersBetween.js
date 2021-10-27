function between(a, b) {
  result = [];
  const firstNum = a;
  const lastNum = b;

  for (let index = a+1; index <= b -1; index++) {
    result.push(index);
  }
  return result;
}

console.log(between(3,9))