const knex = require("../../knex-database-connection/knexConnection");

function bowlerWithBestEcomomyInSuperOver() {
  return knex
    .select(
      "bowler",
      knex.raw("(sum(total_runs-legbye_runs)* 6 / COUNT(bowler)) as eco")
    )
    .from("deliveries")
    .whereRaw("(is_super_over != '0')")
    .groupBy("bowler")
    .orderBy("eco", "asc")
    .limit(1)
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

module.exports = bowlerWithBestEcomomyInSuperOver;
