const knex = require("../../knex-database-connection/knexConnection");

function top10EconomicalBowlerIn2015() {
  const subQuery = knex
    .select("id")
    .from("matches as m")
    .where("season", "=", "2015");

  const mainQuery = knex
    .select(
      "bowler",
      knex.raw("(6 * SUM(total_runs - legbye_runs) / count(bowler)) as economy")
    )
    .from("deliveries as d")
    .whereIn("match_id", subQuery)
    .groupBy("bowler")
    .orderBy("economy", "ASC")
    .limit(10);

  return mainQuery
    .then((result) => {
      return result;
    })
    .catch((err) => {
      throw err;
    })
    .finally(() => {
      knex.destroy();
    });
}
module.exports = top10EconomicalBowlerIn2015;
