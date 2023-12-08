const matchesPerYear = require("../src/server/1-matches-per-year");

matchesPerYear()
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    throw err;
  });
