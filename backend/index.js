const express = require("express");
const github = require("./src/gitAuth");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", github);
app.use(cors());

app.get("/", (req, res) => {
  res.send(process.env.Name);
});

app.listen(8080, () => {
  console.log("server start 8080");
});
