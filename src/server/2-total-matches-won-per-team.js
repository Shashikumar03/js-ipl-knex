const knex = require("../../knex-database-connection/knexConnection");

function totalMatchesWonPerTeam() {
  return knex
    .select("season", "winner")
    .count("winner as total_win")
    .from("matches")
    .groupBy("season", "winner")
    .orderBy("season")
    .then((result) => result)
    .catch((err) => {})
    .finally(() => {
      knex.destroy();
    });
}
module.exports = totalMatchesWonPerTeam;
