function expandedForm(num) {
  let finalArr = [];
  let ignored = [];

  let stringNumArr = num.toString().split("").reverse();
 

  for (let index = stringNumArr.length - 1; index >= 0; index--) {
    stringNumArr[index] === "0"
      ? ignored.push(stringNumArr[index])
      : finalArr.push(stringNumArr[index] + "0".repeat(index));
  }
  return finalArr.join(" + ");
}

// num- 361 - 300, 60, 1
// string/split/reverse
// num = ['1', '6', '3']

// iteration 1
// index = 2, on '3'
// '3' is not '0'
// finalArr.push '3' + ('0' * index) - which is 2
// 300

// iteration 2
// index = 1, on '6'
// '6' is not '0'
// finalArr.push '6' + ('0' * index) - which is 1
// 60

// iteration 3
// index = 0, on '1'
// '1' is not '0'
// finalArr.push '1' + ('0' * index) - which is 0
// 1
