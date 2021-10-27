const user = {
  name: "olivia",
  age: 23,
  occupation: "junior developer",
};

// Object.keys();
// Object.values();
// Object.entries();

// OBJECT.KEYS METHOD
// takes in object, returns array of each property
//console.log(Object.keys(user)); // [ 'name', 'age', 'occupation' ]

// LOOP OVER KEYS
for (const key of Object.keys(user)) {
  // loop through keys
  //console.log(`${key} => ${user[key]}`); // name => olivia // age => 23 // occupation => junior developer
  // user[key] will give the value
}

// OBEJECT.VALUES()
//console.log(Object.values(user)); // [ 'olivia', 23, 'junior developer' ]
// can only access, value, not keys with this method

// OBJECT.ENTRIES() - combination of the two
// best for looping over objects
    //console.log(Object.entries(user));
// returns a 2D array, array of arrays
// index 0 contains key, index 1 contains value in each []
// [
//     index0 - [ 'name', 'olivia' ],
//     index1 -[ 'age', 23 ],
//     index2 -[ 'occupation', 'junior developer' ]
// ]

for (const entry of Object.entries(user)){
    //console.log(`${entry[0]} => ${entry[1]}`)
}

// cleaner method, destructuring 

for (const [key, value] of Object.entries(user)){
    console.log(`${key} => ${value}`)
}
  
