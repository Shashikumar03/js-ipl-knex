const highestNoOfTimesOnePlayerDismissedByBowler = require("../src/server/8-highest-no-of-times-one-player-dismissed-by-bowler");

highestNoOfTimesOnePlayerDismissedByBowler()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    throw err;
  });
