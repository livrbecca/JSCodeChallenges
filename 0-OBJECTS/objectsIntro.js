const obj = {
  name: "olivia",
  age: 23,
  anime_fave: "gintama",
};

// BRACKET NOTATION
// used to set variables on it
obj["name"] = "liv";
// console.log(obj['age']); - 23
// console.log(obj['name']); - liv, key needs to be in ''
// obj name, followed by name of the propery, set to new edit

//CREATION
const obj1 = {};
const obj2 = new Object();
const horse = Object.create({});

// SETTING PROPERTIES, DELETING PROPERTIES
let myNameIs = "olly";
let myAgeIs = 23;

const obj4 = {
  myNameIs,
  myAgeIs,
};
//console.log(obj4);- { myNameIs: 'olly', myAgeIs: 23 }

// Computed propery - use varibale as a property name by warapping in []

const color = "myFaveColorIs";

const obj5 = {
  [color]: "yellow",
};

// console.log(obj5.myFaveColorIs) - yellow

// Delete
delete obj.age;
// console.log(obj) - age key:value is gone

// CREATE COPIES OF OBJECTS
// Object.assign - copy an objects properties and create new reference
// changes to the original WONT affect the clone

const original = {
  a: 1,
  b: 2,
  c: 3,
};
const clone = Object.assign({}, original);
//console.log(clone) - { a: 1, b: 2, c: 3 }

// Or use spread syntax
const spreadClone = { ...original };
const spreadClone2 = { ...original, d: 4 };
// console.log(spreadClone)  - { a: 1, b: 2, c: 3 }
//console.log(spreadClone2) - { a: 1, b: 2, c: 3, d: 4 }
