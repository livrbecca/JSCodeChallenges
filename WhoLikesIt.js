function likes(names) {
  let result = "";

  switch (names.length) {
    case 0:
      result = "no one likes this";
      break;

    case 1:
      result = "first likes this".replace("first", names[0]);
      // alternative `${names[0]} likes this`
      break;

    case 2:
      result = "first and second like this"
        .replace("first", names[0])
        .replace("second", names[1]);
        // alternative `${names[0]} and ${names[1]} likes this`
      break;

    case 3:
      result = "first, second and third like this"
        .replace("first", names[0])
        .replace("second", names[1])
        .replace("third", names[2]);
      break;

    default:
      result = `first, second and ${names.length - 2} others like this`
        .replace("first", names[0])
        .replace("second", names[1]);
  }
  return result;
}

console.log(likes(["Olivia", "Liv", "Olive", "A", "B", "C", "D", "E"]));

console.log(likes(["Olivia"]));

console.log(likes([]));

console.log(likes(["Olivia", "Liv", "Olive"]));
