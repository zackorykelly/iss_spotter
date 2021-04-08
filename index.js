// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  //success case
  console.log(passTimes);
  for (const item of passTimes) {
    const date = new Date(item.risetime * 1000);
    console.log(`Next pass at ${date} for ${item.duration} seconds`);
  }
});