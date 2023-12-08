const playerWonMaxPomEachSeason = require("../src/server/6-player-won-maximum-pom-each-season");

playerWonMaxPomEachSeason()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    throw err;
  });
