const express = require("express");

const User = require("../models/Users");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const users = await User.find({});
    response.json(users);
  } catch (error) {
    response.json({
      message: "Error",
    });
  }
});

module.exports = router;
