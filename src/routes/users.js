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

router.post("/", async (request, response) => {
  const { firstName, lastName, email, phone } = request.body;
  try{
    await User.create({
      firstName,
      lastName,
      email,
      phone,
    });
    response.json({
      message: "User created",
    });
  } catch (error) {
    response.json({
      message: error,
    });
  }
});

module.exports = router;
