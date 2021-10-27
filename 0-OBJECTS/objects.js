// objects inside a way

const blogs = [
  { title: "eh", likes: 34 },
  { title: "meh", likes: 50 },
];

console.log(blogs);

// Math objects
// Math is an object with diff methods
console.log(Math.PI); // returns PI

const area = 7.1;

console.log(Math.round(area)); // The value to be rounded to the nearest integer.
console.log(Math.floor(area)); // floors is to what the int is, 7.9 or 7.7 still 7
console.log(Math.ceil(area)); // rounds up to next int, regardless of decimal point, 7.1 is 8
console.log(Math.trunc(area)); // removed decimal, int only

const random = Math.random();
console.log(random);
