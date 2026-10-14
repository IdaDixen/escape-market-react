const pool = require("./db");

pool
  .query("SELECT NOW()")
  .then((result) => {
    console.log("Forbindelse virker!");
    console.log(result.rows[0]);
  })
  .catch((error) => {
    console.error("Forbindelsesfejl:", error.message);
  })
  .finally(() => pool.end());
