String.prototype.toJadenCase = function (str) {
  const stringJ = this.split(" ");
  const jadenCased = [];

  for (const word of stringJ) {
    const jaden = word.charAt(0).toUpperCase() + word.slice(1); // slicing starts at 0, so we want it from 1, the next lettr
    jadenCased.push(jaden);
  }
  return jadenCased.join(" ");
};
