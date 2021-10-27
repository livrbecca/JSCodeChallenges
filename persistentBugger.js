// how many times must you * the digits untul you reach a single digit

//persistence(39) === 3
// because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

function persistence(num) {
  let sum = num; //
  // callback funct for .reduce
  let reducer = (a, b) => parseInt(a) * parseInt(b); // turn str into numbers
  let count = 0; /// will increase if 9>

  if (num < 9) {
    return count;
  } else {
    while (sum > 9) {
      let arr = sum.toString().split("");
      sum = arr.reduce(reducer);
      count++;
    }
    return count;
  }
}
console.log(persistence(39));
