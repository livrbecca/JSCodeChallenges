// nested array, first num is age, second is handicap rate
// if age > 55 and handicap > 7, return senior, otherwise return open

function decideCategory([member]) {
  return member[0] >= 55 && member[1] > 7 ? "Senior" : "Open";
}

function openOrSenior(data) {
  let results = [];

  data.forEach((member) => {
    //results.push(member[0] >= 55 && member[1] > 7 ? "Senior" : "Open");
    //results = decideCategory([member]);
    results.push(member[0] >= 55 && member[1] > 7 ? "Senior" : "Open");
  });
  return results;
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);
