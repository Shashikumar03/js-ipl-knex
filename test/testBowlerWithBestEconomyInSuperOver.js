const bowlerWithBestEcomomyInSuperOver = require("../src/server/9-bowler-with-best-economy-in-super-over");

bowlerWithBestEcomomyInSuperOver()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    throw err;
  });
