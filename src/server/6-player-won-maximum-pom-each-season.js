const knex = require("../../knex-database-connection/knexConnection");

function playerWonMaxPomEachSeason() {
  const subquery = knex("matches as m2")
    .select(knex.raw("count(m2.player_of_match)"))
    .whereRaw("m2.season = m.season")
    .groupBy("m2.player_of_match")
    .orderByRaw("count(*) desc")
    .limit(1);

  const mainQuery = knex("matches as m")
    .select("season", "player_of_match")
    .count("player_of_match as pom")
    .groupBy("season", "player_of_match")
    .having("pom", "=", subquery)
    .orderBy("season");

  // Executeing  main query
  return mainQuery
    .then((results) => {
      return results;
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      knex.destroy();
    });
}

module.exports = playerWonMaxPomEachSeason;
