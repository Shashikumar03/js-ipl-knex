const top10EconomicalBowlerIn2015 = require("../src/server/4-top-10-economical-bowler-in-2015");

top10EconomicalBowlerIn2015()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    throw err;
  });
