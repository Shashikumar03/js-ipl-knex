const knex = require("../../knex-database-connection/knexConnection");

async function extraRunsPerTeamIn2016() {
  try {
    const subquery = await knex
      .select("id")
      .from("matches")
      .where("season", "=", "2016");

    const extraRuns = await knex
      .select("bowling_team")
      .sum("extra_runs as runs")
      .from("deliveries")
      .whereIn(
        "match_id",
        subquery.map((row) => row.id)
      )
      .groupBy("bowling_team")
      .orderBy("runs", "desc");

    return extraRuns;
  } catch (error) {
    throw error;
  } finally {
    knex.destroy();
  }
}
module.exports = extraRunsPerTeamIn2016;
