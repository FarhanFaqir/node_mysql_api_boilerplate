const express = require("express");
const app = express();
const cors = require("cors");
const conn = require("./connection");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/users", require("./controllers/user.js"));
app.use("/departments", require("./controllers/department.js"));

conn.connect(function (err) {
  if (err) throw err;
  console.log("database Connected !");
});

app.listen(8000, function () {
  console.log("Server is rinning on http://localhost:"+port);
});
