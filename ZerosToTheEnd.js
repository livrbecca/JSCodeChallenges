var moveZeros = function (arr) {
  let zeroArr = arr.filter((element) => element === 0);
  let noZeroArr = arr.filter((element) => element !== 0);
  return [...noZeroArr, ...zeroArr];
};
