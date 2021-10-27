function includesNegative(inputArr) {
  const negativeNums = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] < 0) {
      negativeNums.push(inputArr[i]);
    }
  }
  return negativeNums.length > 0 ? true : false;
}

function isLengthTwo(inputArr) {
  const stringOneArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === "1") {
      stringOneArr.push(inputArr[i]);
    }
  }
  return stringOneArr.length === 2 ? true : false;
}

function spaceApart(inputArr) {
  if (includesNegative(inputArr) === true || isLengthTwo(inputArr) === false) {
    return "invalid";
  } else {
    const startingIndex = inputArr.indexOf("1");
    const lastIndex = inputArr.lastIndexOf("1");
    let numbersToSum = [];

    for (let i = startingIndex + 1; i < lastIndex; i++) {
      numbersToSum.push(inputArr[i]);
    }
    //console.log(numbersToSum);
    return numbersToSum.reduce((num1, num2) => num1 + num2);
  }
}

console.log(
  spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1", -6]),
  "expecting invalid"
);
console.log(spaceApart(["1", 9, 20, 38, "1"]), "expecting 67");
console.log(spaceApart(["1", 9, 20, "1", 38, "1"]), "expecting invalid");
console.log(spaceApart(["1", 9, 20, 38, -2]), "expecting invalid");
console.log(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]), "expecting invalid");

//  psedoucode

//helper function: func includesNegative(inputArray){
// empty[]: negativeNums
// loop over inputArray {
// if num less than 0, push to negativeNums
//}
//negNum length > 0, return true, will later return invalid
//}

//helper function: func lengthOfOnes(inputArr){
// empty[]: stringOneArr
// loop over, if stringly === "1", push.
// if length not === 2,
// return false, will later return invalid
//}

// function spaceApart(inputArray){
//if (includesNegative TRUE || lengthOfOnes is FALSE){
// return "invalid"
//}
//else {
// first and last index of "1" for for-loop
// const startingIndex: inputArr.indexOf("1")
// const lastIndex: inputArr.lastIndexOf("1")
// empty[], to store between-numbers and sum(reduce)

// for loop (i = starting + 1, i < last, i ++){
// push each num to []
// }
// return [].reduce to add nums
//}
// }
