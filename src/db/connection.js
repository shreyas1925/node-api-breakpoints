const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect("mongodb://localhost:27017/olympics-records", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(chalk.greenBright.cyan("Database connection successful"));
  })
  .catch((e) => {
    console.log(`Connection failed due to ${e}`);
  });
