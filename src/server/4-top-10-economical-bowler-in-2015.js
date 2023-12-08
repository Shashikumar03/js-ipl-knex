const knex = require("../../knex-database-connection/knexConnection");

function top10EconomicalBowlerIn2015() {
  const subquery = [];

  return knex
    .select("id")
    .from("matches as m")
    .where("season", "=", "2015")
    .then((result) => {
      result.forEach((data) => {
        subquery.push(data.id);
      });

      return knex
        .select(
          "bowler",
          knex.raw(
            "(6 * SUM(total_runs - legbye_runs) / count(bowler)) as economy"
          )
        )
        .from("deliveries as d")
        .whereIn("match_id", subquery)
        .groupBy("bowler")
        .orderBy("economy", "ASC")
        .limit(10);
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      knex.destroy();
    });
}
module.exports = top10EconomicalBowlerIn2015;
