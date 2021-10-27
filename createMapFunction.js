function subtractTwo(number) {
  return number - 2;
}

function map(arrNum, func) {
  const result = [];

  for (let num of arrNum) {
    const res = func(num);
    result.push(res);
  }

  return result;
}

console.log(map([1, 3, 5, 6], subtractTwo));
