strikeRateOfBatsmanEachSeason = require("../src/server/7-strike-rate-of-batsman-each-season");
strikeRateOfBatsmanEachSeason()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    throw err;
  });
