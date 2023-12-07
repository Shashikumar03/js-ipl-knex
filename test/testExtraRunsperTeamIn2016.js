const extraRunsPerTeamIn2016 = require("../src/server/3_extra_run_per_team_in_2016");

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
