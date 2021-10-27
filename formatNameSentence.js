// Given: an array of objects containing hashes of names
// list([ {name: 'Bart'}, {name: 'Lisa'} ])

//Return: a string formatted as a list of names separated by commas except for the last two names
//which should be separated by an ampersand.

// IF STATEMENT
function list(names) {
  result = "";
  const arrayOfNames = Array.from(names, ({ name }) => name);
  console.log(arrayOfNames);

  if (arrayOfNames.length === 0) {
    return "";
  } else if (arrayOfNames.length === 1) {
    return arrayOfNames[0];
  } else if (arrayOfNames.length === 2) {
    return `${arrayOfNames[0]} & ${arrayOfNames[1]}`;
  } else if (arrayOfNames.length >= 3) {
    const lastName = arrayOfNames[arrayOfNames.length - 1];
    const secondLastName = arrayOfNames[arrayOfNames.length - 2];
    //console.log(SecondlastName, lastName)
    const joinedLast = `${secondLastName} & ${lastName}`;
    const theRest = arrayOfNames.slice(0, arrayOfNames.length - 2).join(", ");
    return `${theRest}, ${joinedLast}`;
  }
}
console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));
// SWITCH STATEMENT

// function list(names) {
//   let result = "";
//   const arrayOfNames = Array.from(names, ({ name }) => name);

//   const lastName = arrayOfNames[arrayOfNames.length - 1];
//   const secondLastName = arrayOfNames[arrayOfNames.length - 2];

//   const joinedLast = `${secondLastName} & ${lastName}`;
//   const theRest = arrayOfNames.slice(0, arrayOfNames.length - 2).join(", ");

//   switch (arrayOfNames.length) {
//     case 0:
//       result = "";
//       break;

//     case 1:
//       result = `${arrayOfNames[0]}`;
//       break;

//     case 2:
//       result = `${arrayOfNames[0]} & ${arrayOfNames[1]}`;
//       break;

//     default:
//       result = `${theRest}, ${joinedLast}`;
//   }
//   return result;
// }
