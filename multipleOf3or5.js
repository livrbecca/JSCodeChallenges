function solution(number) {
    // need 0 for the reducer's inital value
  let sum = [0];
 
  // helper function
  function isntBiggerOrEqual(total, limit) {
      // not the same number and total smaller than limit
    return total !== limit && total < limit;
  }

  if (number > 0) {
      // 3, so you can do 3 * 1 = 3
    for (let i = 1; i < number; i++) {
      let totalFor3 = 3 * i;
      let totalFor5 = 5 * i;

      if (isntBiggerOrEqual(totalFor3, number)) {
        sum.push(totalFor3);
      }

      if (isntBiggerOrEqual(totalFor5, number)) {
        sum.push(totalFor5);
      }
    }
  return Array.from(new Set(sum)).reduce((x, y) => x + y);
  } else if (number <= 0) {
    return 0;
  }
}

console.log(solution(9))

