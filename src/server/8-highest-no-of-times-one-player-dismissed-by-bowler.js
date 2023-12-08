const knex = require("../../knex-database-connection/knexConnection");

function highestNoOfTimesOnePlayerDismissedByBowler() {
  return knex
    .select(
      "player_dismissed",
      "bowler",
      knex.raw('SUM(IF(player_dismissed != "", 1, 0)) as  dissmisal')
    )
    .from("deliveries as d")
    .whereNotNull("player_dismissed")
    .andWhere("player_dismissed", "!=", "")
    .groupBy("player_dismissed", "bowler")
    .orderBy("dissmisal ", "DESC")
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
module.exports = highestNoOfTimesOnePlayerDismissedByBowler;
