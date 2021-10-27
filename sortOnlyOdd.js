// filter out into a new var all the odd numbers
// create empty array to store the new result / output in - output array
// initialize an index for the odd numbers starting from 0

// for loop, i = 0, less than array length, i++
// if the number is odd
// push to the output array the first index of the sorted odd numbers
// else, push the number as it is (even number)

// return the output array

function sortArray(array) {
  let filteredOdd = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);
  const sortedArr = [];
  let indexForOdd = 0;

  for (let i = 0; i < array.length; i++) {
    if (filteredOdd.includes(array[i])) {
      sortedArr.push(filteredOdd[indexForOdd++]);
    } else {
      sortedArr.push(array[i]);
    }
  }
  return sortedArr;
}

console.log(sortArray([99, 35, 57, 12, 38, 54]), "should be 35,57,99,12,38,54");
