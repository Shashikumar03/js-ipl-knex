const knex = require("../../knex-database-connection/knexConnection");


async function matchesPerYear() {
  try {
    const data = await knex
      .select("season")
      .count("* as matches")
      .from("matches")
      .groupBy("season");
    knex.destroy();
    return data;
  } catch (error) {
    console.log(error);
  }
}
module.exports = matchesPerYear;
