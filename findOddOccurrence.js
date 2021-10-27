function findOdd(array) {
  //empty object
  const results = {};

  // count repeat occurrences, put into object
  for (let num of array) {
    if (num in results) {
      results[num] += 1;
    } else {
      results[num] = 1;
    }
  }

  // store new counted object
  const newObj = results;

  // iterate over object to check for a value thats odd, then return its key.
  // this method will return the key as a string, convert it into a number
  for (const [key, value] of Object.entries(newObj)) {
    if (value % 2 !== 0) {
      return Number(key);
    }
  }
}

console.log(findOdd([1, 1, 2, 7, 7, 7, 7]));

// other ways

function findOdd(A) {
  var obj = {};
  A.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}

//
