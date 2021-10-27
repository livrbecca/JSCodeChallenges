// iterating over an object

const ob = {
  name: "liv",
  age: 23,
  job: "junior dev",
  amazing: true,
  stringNum: "18",
  favNum: 11,
  yearBorn: 1998,
  randomNum: 5,
};

// for IN loop - good for objects
// get more flexibilties through arrays: object.keys/values/entries

// static methods
// console.log("keys", Object.keys(ob));
// console.log("values", Object.values(ob));
// console.log("entries is a sub-array", Object.entries(ob));

// only want numbers
// filter; take an array and filter out values you dont want
// returns an array with only the values you do want

const getAllNumbers = function (objectParam) {
  // pass each value, now stored in variable val
  // NaN checks if something ISNT number, returns true
  // reverse using logical-not operator !, checks if IS a number
  return Object.values(objectParam).filter(
    (val) => !isNaN(val) && typeof val !== "boolean"
  );
};
// place value into new array, new array will be returned from this function
// true for everything thats a number
// what if number in string or you have a boolean? would so be true for that

let nums = getAllNumbers(ob);
console.log("nums", nums);
// get '18' bc its string that CAN be coerced to a number, like a boolean can
// hence why removed boolean, not a coerced number we want
console.log(typeof '18')