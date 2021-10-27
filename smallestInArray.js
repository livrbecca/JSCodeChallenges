class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    args.forEach((num) => {
      if (num < smallest) {
        smallest = num;
      }
    });
    return smallest;
  }
}
