const express = require("express");
const dbcon = require("../src/db/connection");
const chalk = require("chalk");
const router = require("../src/routers/mensRoute")
const app = express();
const PORT = process.env.PORT || 3000;

// To get json to our express
app.use(express.json());
app.use(router)


app.listen(PORT, () => {
  console.log(
    chalk.yellow.bold(`Connection succesfull and running on port ${PORT}`)
  );
});
