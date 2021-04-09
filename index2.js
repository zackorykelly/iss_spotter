const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((times) => {
    printTimes(times);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

const printTimes = function(passTimes) {
  for (const item of passTimes) {
    const date = new Date(item.risetime * 1000);
    console.log(`Next pass at ${date} for ${item.duration} seconds`);
  }
};