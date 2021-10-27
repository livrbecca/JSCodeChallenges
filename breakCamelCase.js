function solution(string) {
  const splitString = string.split("");
  console.log(splitString);
  const results = [];

  splitString.forEach((letter) => {
    if (letter.toUpperCase() === letter) {
      results.push(" ");
    }
    results.push(letter);
  });
  return results.join("");
  //console.log(results);
}

console.log(solution("camelCaseTesting"));

// livWalker
// IF theres a capital, push a space, then continue pushing letters
// [l, i, v, , W, a, l, k, e, r ]
