const express = require("express");
const router = express.Router();
const conn = require("../connection");

router.get("/", (req, res) => {
  var sql = "SELECT * FROM departments";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  var sql = `INSERT INTO departments (name) VALUES ('${name}')`;
  console.log(sql);
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   res.send("Department has been created successfully");
  // });
  const user = await conn.query(sql);
  if (user)
    res.json({
      code: 200,
      msg: "Success",
      data: req.body,
    });
});

module.exports = router;
