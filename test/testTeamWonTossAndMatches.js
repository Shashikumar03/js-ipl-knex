const teamWonTossAndMatches = require("../src/server/5-team-won-toss-and-match");

teamWonTossAndMatches()
  .then((results) => {
    results.forEach((result) => {
      console.log(
        `winner:${result.winner}, toss_and_Match:${result.toss_and_match_winner}`
      );
    });
  })
  .catch((err) => {
    throw err;
  });
