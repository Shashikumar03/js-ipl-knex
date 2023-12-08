const knex = require("../../knex-database-connection/knexConnection");

function strikeRateOfBatsmanEachSeason() {
  return knex
    .select(
      "batsman",
      "season",
      knex.raw(
        "(SUM(batsman_runs) * 100) / NULLIF(SUM(IF(d.wide_runs = 0, 1, 0)), 0) as strike_rate"
      )
    )
    .from("deliveries as d")
    .innerJoin("matches as m", "m.id", "=", "d.match_id")
    .groupBy("batsman", "season")
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
module.exports = strikeRateOfBatsmanEachSeason;
