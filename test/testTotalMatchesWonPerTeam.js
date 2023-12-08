const totalMatchesWonPerTeam = require("../src/server/2-total-matches-won-per-team");

totalMatchesWonPerTeam()
  .then((results) => {
    const object = results.map((result) => {
      return {
        season: result.season,
        total_win: result.total_win,
        winner: result.winner,
      };
    });
    console.log(object);
  })
  .catch((err) => {
    throw err;
  });
