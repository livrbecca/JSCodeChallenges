// iterate over properties of an object AND its children objects
// object tree
const person = {
  firstName: "Olivia",
  lastName: "Walker",
  middleNames: {
    first: "Monquie",
    second: "Rebecca",
    third: "Rose",
  },
  funny: true,
  address: {
    street: "wallaby way",
    city: "wolves",
    postcode: "WV",
  },
};

// looping through object with children
// check for object
// if true, do another loop
function isObject(input) {
  return typeof input === "object" ? true : false;
};

for (let val in person) {
    // is object?
    if (isObject(person[val])) {
        // yes, loop, val2 is key, person[val] is using the original object and property
        for (let val2 in person[val]){
            // person[val][val2] gets sub-object value
            console.log(val2, person[val][val2] )
        }
  } else {
    console.log(val, person[val]);
  }
}
