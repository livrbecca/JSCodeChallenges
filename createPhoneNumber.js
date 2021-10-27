function createPhoneNumber(numbers) {
  const firstThree = numbers.slice(0, 3).join(""); // 028462950373, slicing 0-3 is 028, 0 from the start, stops before/at 3rd
  const nextThree = numbers.slice(3, 6).join(""); // 028-462-950373,
  return `(${firstThree}) ${nextThree}-${numbers.splice(6).join("")}`;
}

console.log(createPhoneNumber([0, 7, 8, 0, 8, 8, 3, 8, 1, 2, 1]));


// alternative 

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }
