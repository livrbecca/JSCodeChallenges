function sprintRecord(personalArr, recordObj) {
  let result = {};
  result["newPersonalBests"] = 0;
  result["newWorldRecord"] = false;
  result["newOlympicRecord"] = false;

  personalArr.map((times) => {
    if (times.performance < times.personalBest) {
      result["newPersonalBests"] += 1;
    }
    if (times.performance < recordObj.worldRecord) {
      result["newWorldRecord"] = true;
    }
    if (times.performance < recordObj.olympicRecord) {
      result["newOlympicRecord"] = true;
    }
    console.log(result);
  });
}

console.log(
  sprintRecord(
    [
      { personalBest: 13.83, performance: 13.11 },
      { personalBest: 12.92, performance: 12.9 },
      { personalBest: 12.81, performance: 12.95 },
    ],
    { worldRecord: 12.8, olympicRecord: 12.91 }
  )
);
