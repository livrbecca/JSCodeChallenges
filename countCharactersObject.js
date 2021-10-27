function count(string) {
  const results = {};

  for (let char of string) {
      
    if (char in results) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }

  return results;
}

console.log(count('olivia'))