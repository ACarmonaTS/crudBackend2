const usersRouter = require("./users");
const express = require("express");
const app = express()

const configure = (app) => {
  app.use("/users", usersRouter);
};

module.exports = configure;
