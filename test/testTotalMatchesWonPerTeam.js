const totalMatchesWonPerTeam = require("../src/server/2_total_matches_won_per_team");

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
