// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out 
//and the nearest pump is 50 miles away! You know that on average, your car runs on about 
//25 miles per gallon. 
//There are 2 gallons left. 
// Function should return true if it is possible and false if not

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft ? true : false
    // 50 miles
    // 25 miles per gallon
    // 2 gallons left
  };