const knex = require("../../knex-database-connection/knexConnection");

function teamWonTossAndMatches() {
  return knex
    .select(
      "winner",
      knex.raw("sum(if(toss_winner = winner, 1, 0)) as toss_and_match_winner")
    )
    .from("matches")
    .groupBy("winner")
    .orderBy("toss_and_match_winner", "desc")
    .then((results) => {
      return results;
    })
    .catch((err) => {
      throw err;
    })
    .finally(() => {
      knex.destroy();
    });
}
module.exports = teamWonTossAndMatches;
