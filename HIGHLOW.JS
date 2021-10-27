// .map method
// function highAndLow(numbersString) {
//   const numberStringsArray = numbersString.split(" ");

//   const realNumber = numberStringsArray.map((eachString) => Number(eachString));

//   const highestNumber = Math.max.apply(Math, realNumber);
//   const lowestNumber = Math.min.apply(Math, realNumber);

//   return `${highestNumber} ${lowestNumber}`;
// }

// console.log(highAndLow("0 9 5 28 342 85 3 1 24"));

// for loop

function highAndLow(stringOfNumbers) {

  const toNums = stringOfNumbers.split(" ").map((num) => Number(num));

  let min = toNums[0];
  let max = toNums[0];

  for (let index = 0; index < toNums.length; index++) {

    let value = toNums[index];

    // ignore
    min = value < min ? value : min;
    max = value > max ? value : max;
    //ignore
    
  }
  return `${min} ${max}`;
}

console.log(highAndLow("2 8 3 5"));
