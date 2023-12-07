const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "Shashi@123",
    database: "javascript",
    port: 3306,
  },
  pool: { min: 0, max: 7 }, // Adjust pool settings as needed
});

module.exports = knex;
