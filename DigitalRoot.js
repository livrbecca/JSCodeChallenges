function digitalRoot(number) {
  let sum = number;
  let arr = [];
  let reducer = (a, b) => parseInt(a) + parseInt(b);
  while (sum > 9) {
    arr = sum.toString().split("");
    sum = arr.reduce(reducer);
  }
  return sum
}

console.log(digitalRoot(456));
