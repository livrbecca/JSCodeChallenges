function meeting(x){
  var idx = x.indexOf("O");
  return idx === -1 ? "None available!": idx
}


console.log(meeting(["X", "X", "O", "X", "O"]))