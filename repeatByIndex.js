function accum(s) {

  const wordArr = s.split("");

  let word = [];

  for (let index = 0; index < wordArr.length; index++) {

    const firstList = wordArr[index].repeat(index + 1);

    const cap = firstList[0].toUpperCase();
    
    word.push(cap + firstList.slice(1).toLowerCase());
  }
  return word.join("-");
}

console.log(accum("asdfghjkl"))