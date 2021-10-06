var express = require("express");
var router = express.Router();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "devs",
  password: "ppp",
  port: 5432,
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  pool.query(
    `SELECT * FROM  "Users" where id=$1`,
    [req.query.id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rows);
    }
  );
});

module.exports = router;
