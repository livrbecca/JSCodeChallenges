function duplicateCount(text) {
  const lowerText = text.toLowerCase();

  const duplicated = [];

  for (let index = 0; index < lowerText.length; index++) {
    if (
      lowerText.indexOf(lowerText[index]) !==
      lowerText.lastIndexOf(lowerText[index])
    ) {
      duplicated.push(lowerText[index]);
    }
  }
  return Array.from(new Set(duplicated)).length;
}
