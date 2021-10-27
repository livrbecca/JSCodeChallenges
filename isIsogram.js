// An isogram is a word that has no repeating letters, consecutive or non-consecutive.

function isIsogram(str) {
  str = str.toLowerCase();

  for (let index = 0; index < str.length; index++) {
    if (str.indexOf(str[index]) !== str.lastIndexOf(str[index])) return false;
  }
  return true;
}
