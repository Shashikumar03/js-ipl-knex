const top10EconomicalBowlerIn2015 = require("../src/server/4_top_10_economical_bowler_in_2015");

top10EconomicalBowlerIn2015()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    throw err;
  });
