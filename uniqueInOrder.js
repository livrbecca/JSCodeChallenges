var uniqueInOrder = function (iterable) {


  // create an empty array
  const removed = [];

  // create a counted for loop, starting from 0, for the length of the parameter
  for (let i = 0; i < iterable.length; i++) {
    // need to make sure the character after it isnt identical,
    if (iterable[i] !== iterable[i + 1]) {
      // if not identical, push to array
      removed.push(iterable[i]);
    }
  }
  return removed;
};
