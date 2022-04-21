const express = require("express");
const router = express.Router();
const conn = require("../connection");

router.post("/login", async (req, res) => {
  const { name, password } = req.body;

  var sql = `SELECT name , email FROM user WHERE name = '${name}' AND password = '${password}'`;
  conn.query(sql, function (err, result) {
    if (err) throw err;
    if (result.length > 0) {
      res.json({
        code: 200,
        msg: "success",
        data: result[0],
      });
    } else {
      res.json({
        code: 500,
        msg: "failed",
        data: [],
      });
    }
  });
  // res.json(user);
  //   if (user)
  //     res.json({
  //       code: 200,
  //       msg: " login Success",
  //       data: req.body,
  //     });
});

module.exports = router;
