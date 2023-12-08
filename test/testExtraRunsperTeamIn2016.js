const extraRunsPerTeamIn2016 = require("../src/server/3-extra-run-per-team-in-2016");

extraRunsPerTeamIn2016()
  .then((result) => {
    const extraRuns = result.map((data) => {
      return {
        bowling_team: data.bowling_team,
        runs: data.runs,
      };
    });
    console.log(extraRuns);
  })
  .catch((err) => {
    console.log(err);
  });
