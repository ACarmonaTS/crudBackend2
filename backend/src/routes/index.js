const usersRouter = require("./users");

const configure = (app) => {
  app.use("/users", usersRouter);
};

module.exports = configure;
