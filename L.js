function generateShape(N) {
  const letter = "L";
  const line = `${letter} \n`.repeat(N - 1);
  const final = `${letter.repeat(N)}`;
  return `${line}${final}`;
}

console.log(generateShape(9));
